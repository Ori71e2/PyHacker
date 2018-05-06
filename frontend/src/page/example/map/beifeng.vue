<template>
    <div class="map-container">
        <div id="map1" class="map-container"></div>
        <div id="panelNav"></div>
        <div id="panelTools">
            <div>
            <el-popover placement="top" trigger="hover">
                <div>
                    <el-checkbox @change="toAlertb('b')">比例尺</el-checkbox>
                    <el-checkbox @change="toAlert(this)">工具条</el-checkbox>
                    <el-checkbox @change="toAlert()">工具条方向盘</el-checkbox>
                    <el-checkbox @change="toAlert()">工具条标尺</el-checkbox>
                    <el-checkbox @change="toAlert()">显示鹰眼</el-checkbox>
                    <el-checkbox @change="toAlert()">展开鹰眼</el-checkbox>
                </div>
                <el-button slot="reference" type="primary">
                    控件<i class="el-icon-arrow-up el-icon--right"></i>
                </el-button>
            </el-popover>
            </div>
            <el-popover placement="top" trigger="hover">
                <el-checkbox-group v-model="checkedToolsList" @change="handleCheckedToolsChange">
                    <el-checkbox id="scale" v-model="scale" label="比例尺" @change="toggleScale"></el-checkbox>
                    <el-checkbox id="toolBar" v-model="toolBar" label="工具条" @change="toggleToolBar"></el-checkbox>
                    <el-checkbox id="toolBarDirection" v-model="toolBarDirection" label="工具条方向盘" disabled @change="toggleToolBarDirection"></el-checkbox>
                    <el-checkbox id="toolBarRuler" v-model="toolBarRuler" label="工具条标尺" disabled @change="toggleToolBarRuler"></el-checkbox>
                    <el-checkbox id="overView" v-model="overViewShow" label="显示鹰眼" @change="toggleOverViewShow"></el-checkbox>
                    <el-checkbox id="overViewOpen" v-model="overViewOpen" label="展开鹰眼" disabled @change="toggleOverViewOpen"></el-checkbox>
                </el-checkbox-group>
                <el-button slot="reference" type="primary">
                    控件<i class="el-icon-arrow-up el-icon--right"></i>
                </el-button>
            </el-popover>

            <el-dropdown size="medium" type="primary">
                <el-button type="primary">
                    线路<i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>黄金糕</el-dropdown-item>
                    <el-dropdown-item>狮子头</el-dropdown-item>
                    <el-dropdown-item>螺蛳粉</el-dropdown-item>
                    <el-dropdown-item>双皮奶</el-dropdown-item>
                    <el-dropdown-item>蚵仔煎</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
            <el-dropdown size="medium" type="primary">
                <el-button type="primary">
                    标注<i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>黄金糕</el-dropdown-item>
                    <el-dropdown-item>狮子头</el-dropdown-item>
                    <el-dropdown-item>螺蛳粉</el-dropdown-item>
                    <el-dropdown-item>双皮奶</el-dropdown-item>
                    <el-dropdown-item>蚵仔煎</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
            <tools-control></tools-control>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
/* eslint-disable */
import { mapState, mapMutations, mapActions } from 'vuex'
import amap from '@/util/amap'
import EqLayer from './layer/equipmentLayer.js'
import StaMarker from './layer/staticMarker.js'
import EqDraw from './layer/equipmentDraw.js'
import DyLayer from './layer/dynamicLayer.js'
import DrivingNav from './function/drivingNav.js'
import ToolsControl from './function/toolsControl.js'

import toolsControl from './function/toolsControl'

export default {
    ame: 'toolsControl',
    components: {toolsControl},

    data() {
        return {
            staMarker: '',
            eqDraw: '',
            dyLayer: '',
            drivingNav: '',
            toolsControl: '',
            map: '',
            AMap: '',
            checkedToolsList: [],
            
            scale: false,
            toolBar: false,
            toolBarDirection: false,
            toolBarRuler: false,
            overViewShow: false,
            overViewOpen: false
        }
    },
    mounted() {
        amap.load(() => {
            this.init()
        })
    },
    activated() {
        //this.dyLayer = new DyLayer(this.map, AMap);
    },

    methods: {
        ...mapActions({
            getLine: 'equipment/getLine',
            getTreeInfo: 'equipment/getTreeInfo'
        }),
        init(){
            this.map = new AMap.Map('map1', amap.defaultOption);
            this.AMap = AMap;
            AMap.plugin(['AMap.ToolBar', 'AMap.Scale', 'AMap.OverView'], function () {
                /*
                this.map.addControl(new AMap.ToolBar());
                this.map.addControl(new AMap.Scale());
                this.map.addControl(new AMap.OverView());
                */

            });
            //var eqLayer = new EqLayer(map, AMap);
            //this.staLayer = new StaLayer(this.map, AMap);
            // 线路路径图
            this.eqDraw = new EqDraw(this.map, AMap);
            this.getLine().then(res => {
                if(res) {
                    this.eqDraw.drawPolyLine(res);
                } else {
                    alert('line get fail');
                    return false;
                }
            }).catch(err => {
                console.log('No Data');
                return false;
            })

            // 点标注
            this.staMarker = new StaMarker(this.map, AMap);
            this.getTreeInfo().then(res => {
                if(res) {
                    this.staMarker.drawTreeMarker(res);
                } else {
                    return false;
                }
            }).catch(err => {
                return false;
            })

            // 导航功能
            this.drivingNav = new DrivingNav(this.map, AMap);
            //this.drivingNav.search([118.716087,33.720534], [118.683643,33.763144]);

            // 设置toolBar
            this.toolsControl = new ToolsControl(this.map, AMap);

            var scale = new AMap.Scale({
                    visible: true
                });
            
            
        },
        handleCheckedToolsChange(value) {
            //this.toolsBar.changeTools(value);
        },
        toggleScale() {
            this.scale = this.scale ? 0 : 1;
            this.toolsControl.toggleScale(this.scale)
        },
        toggleToolBar() {
            this.toolBar = this.toolBar ? 0 : 1;
            this.toolsControl.toggleToolBar(this.toolBar)
        },
        toggleToolBarDirection() {
            this.toolBarDirection = this.toolBarDirection ? 0 : 1;
            this.toolsControl.toggleToolBarDirection(this.toolBarDirection)
        },
        toggleToolBarRuler() {
            this.toolBarRuler = this.toolBarRuler ? 0 : 1;
            this.toolsControl.toggleToolBarRuler(this.toolBarRuler)
        },
        toggleOverViewShow() {
            this.overViewShow = this.overViewShow ? 0 : 1;
            this.toolsControl.toggleOverViewShow(this.overViewShow)
        },
        toggleOverViewOpen() {
            this.overViewOpen= this.overViewOpen ? 0 : 1;
            this.toolsControl.toggleOverViewOpen(this.overViewOpen)
        }
    }
}
</script>
<style scoped>
.map-container{
    width: 100%;
    height: 100%;
}

#panelNav{
    position: fixed;
    background-color: white;
    max-height: 70%;
    overflow-y: auto;
    top: 120px;
    right: 10px;
    width: 280px;
}

#panelTools{
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translate(-50%);
}
.el-dropdown {
    vertical-align: top;
}
.el-dropdown + .el-dropdown {
    margin-left: 15px;
}
.el-icon-arrow-down {
    font-size: 12px;
}
</style>

