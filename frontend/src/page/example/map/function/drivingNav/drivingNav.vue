<template>
        <div>
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
        }
    }
}
</script>
<style scoped>
.el-icon-arrow-down {
    font-size: 12px;
}
</style>

