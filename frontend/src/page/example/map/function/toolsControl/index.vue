<template>
        <div id="panelTools">
            <el-popover placement="top" trigger="hover">
                <el-checkbox-group  v-model="checkedToolsList" @change="handleCheckedToolsChange">
                    <el-checkbox ref="scale" v-model="scaleVal"  label="比例尺" @change="toggleScale"></el-checkbox>
                    <el-checkbox ref="toolBar" v-model="toolBarVal" label="工具条" @change="toggleToolBar"></el-checkbox>
                    <el-checkbox ref="toolBarDirection" v-model="toolBarDirectionVal" :disabled="toolBarDirectionDisable" label="工具条方向盘"  @change="toggleToolBarDirection"></el-checkbox>
                    <el-checkbox ref="toolBarRuler" v-model="toolBarRulerVal" :disabled="toolBarRulerDisable" label="工具条标尺"  @change="toggleToolBarRuler"></el-checkbox>
                    <el-checkbox ref="overView" v-model="overViewShowVal" :disable="overViewShowDisable" label="显示鹰眼" @change="toggleOverViewShow"></el-checkbox>
                    <el-checkbox ref="overViewOpen" v-model="overViewOpenVal" :disabled="overViewOpenDisable" label="展开鹰眼"  @change="toggleOverViewOpen"></el-checkbox>
                </el-checkbox-group>
                <el-button slot="reference" type="primary">
                    控件<i class="el-icon-arrow-up el-icon--right"></i>
                </el-button>

            </el-popover>
        </div>
</template>

<script>
/* eslint-disable */

import { mapState, mapMutations, mapActions } from 'vuex'

//var map, eqCanvas, dyCanvas, staCanvas

export default {
    data() {
        return {
            map: '',
            AMap: '',
            checkedToolsList: [], // 所有字段都是必须的，否则没法勾选

            scaleVal: false,
            toolBarVal: false,
            toolBarDirectionVal: false,
            toolBarRulerVal: false,
            overViewShowVal: false,
            overViewOpenVal: false,

            toolBarDirectionDisable: true,
            toolBarRulerDisable: true,
            overViewShowDisable: false,
            overViewOpenDisable: true
        }
    },
    mounted() {

    },
    activated() {
        //this.dyLayer = new DyLayer(this.map, AMap);
    },
    methods: {
        ...mapActions({
            getLine: 'equipment/getLine',
            getTreeInfo: 'equipment/getTreeInfo'
        }),
        init(map, amap){
            // 设置toolBar
            this.map = map;
            this.AMap = amap;
            console.log('tools-control');
            this.scale = new this.AMap.Scale({
                visible: false
            });
            this.toolBar = new AMap.ToolBar({
                visible: false
            });
            this.overView = new AMap.OverView({
                visible: false
            });
            this.map.addControl(this.scale);
            this.map.addControl(this.toolBar);
            this.map.addControl(this.overView);
        },
        handleCheckedToolsChange(value) {
            //this.toolsBar.changeTools(value);
        },
        toggleScale() {
            //this.checkedToolsList.push("工具条");
            //this.toolBarDirectionDisable = !this.toolBarDirectionDisable;
            this.scaleVal = !this.scaleVal;
            if (this.scaleVal) {
                this.scale.show();
            } else {
                this.scale.hide();
            }
        },
        toggleToolBar() {
            console.log('toolBar' + this.toolBarVal);
            console.log(this.checkedToolsList)
            console.log(this.checkedToolsList)
            this.toolBarVal = !this.toolBarVal;
            if (this.toolBarVal) {
                this.toolBarDirectionVal = true;
                this.toolBarRulerVal = true;
                this.showToolBar();
                this.showToolBarDirection();
                this.showToolBarRuler();
            } else {
                this.toolBarDirectionVal = false;
                this.toolBarRulerVal = false;
                this.hideToolBar();
                this.hideToolBarDirection();
                this.hideToolBarRuler();
            }
        },
        toggleToolBarDirection() {
            this.toolBarDirectionVal = !this.toolBarDirectionVal;
            if (this.toolBarDirectionVal) {
                this.toolBar.showDirection()
            } else {
                this.toolBar.hideDirection()
            }
        },
        toggleToolBarRuler() {
            this.toolBarRulerVal = !this.toolBarRulerVal;
            if (this.toolBarRulerVal) {
                this.toolBar.showRuler();
            } else {
                this.toolBar.hideRuler();
            }
        },
        toggleOverViewShow() {
            this.overViewShowVal = !this.overViewShowVal;
            if (this.overViewShowVal) {
                this.overView.show();
                this.overViewOpenDisable = false;
                if (!this.checkedToolsList.includes("展开鹰眼")) {
                    this.checkedToolsList.push("展开鹰眼");
                    this.overViewOpenVal = true;
                    this.overView.open();
                }
            } else {
                this.overView.hide();
                if (this.checkedToolsList.includes("展开鹰眼")) {
                    this.checkedToolsList.splice(this.checkedToolsList.findIndex(item => item == "展开鹰眼"), 1);
                    this.overViewOpenVal = false;
                    this.overView.close();
                }
                this.overViewOpenDisable = true;
            }
        },
        toggleOverViewOpen() {
            this.overViewOpenVal= !this.overViewOpenVal;
            if (this.overViewOpenVal) {
                this.overView.open();
            }
            else {
                this.overView.close();
            }
        },
        showToolBar() {
            this.toolBarDirectionDisable = false;
            this.toolBarRulerDisable = false;
            this.toolBar.show();
        },
        hideToolBar() {
            this.toolBarDirectionDisable = true;
            this.toolBarRulerDisable = true;
            this.toolBar.hide();
        },
        showToolBarDirection() {
            if (!this.checkedToolsList.includes("工具条方向盘")) {
                this.checkedToolsList.push("工具条方向盘");
                this.toolBar.showDirection();
            }
        },
        hideToolBarDirection() {
            if (this.checkedToolsList.includes("工具条方向盘")) {
                this.checkedToolsList.splice(this.checkedToolsList.findIndex(item => item == "工具条方向盘"), 1);
                this.toolBar.hideDirection();
            }
        },
        showToolBarRuler() {
            if (!this.checkedToolsList.includes("工具条标尺")) {
                this.checkedToolsList.push("工具条标尺");
                this.toolBar.showRuler();
            }
        },
        hideToolBarRuler() {
            if (this.checkedToolsList.includes("工具条标尺")) {
                this.checkedToolsList.splice(this.checkedToolsList.findIndex(item => item == "工具条标尺"), 1);
                this.toolBar.hideRuler();
            }
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

