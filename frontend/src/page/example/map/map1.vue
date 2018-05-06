<template>
    <div class="map-container">
        <div id="map1" class="map-container"></div>
        <div id="panelNav"></div>
        <div id="panelTools">
            <tools-control ref="toolsControl"></tools-control>
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

import toolsControl from './function/toolsControl/index.vue'

export default {
    ame: 'toolsControl',
    components: {toolsControl},
    data() {
        return {
            map: '',
            AMap: '',
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
            });
 
            this.$refs.toolsControl.init(this.map, this.AMap);
            console.log('end');
        },

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

