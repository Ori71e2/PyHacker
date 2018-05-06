<template>
    <div class="map-container">
        <div id="map1" class="map-container"></div>
        <div id="panelNav"></div>
        <div id="panelTools">
            <tools-control class="panelTools" ref="toolsControl"></tools-control>
            <static-marker class="panelTools" ref="staticMarker"></static-marker>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
/* eslint-disable */
import { mapState, mapMutations, mapActions } from 'vuex'
import amap from '@/util/amap'
import EqLayer from './layer/equipmentLayer.js'
import EqDraw from './layer/equipmentDraw.js'
import DyLayer from './layer/dynamicLayer.js'
import DrivingNav from './function/drivingNav.js'

import toolsControl from './function/toolsControl'
import staticMarker from './function/staticMarker'

export default {
    components: {toolsControl, staticMarker},
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
            this.$refs.staticMarker.init(this.map, this.AMap);
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

.panelTools{
    float: left;
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

