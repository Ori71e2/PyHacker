<template>
    <div class="map-container">
        <div id="map1" class="map-container"></div>
        <div id="panelNav"></div>
        <div id="panelTools">
            <el-row type="flex" class="row-bg" justify="space-around" :gutter="20">
                <el-col :span="4"><tools-control ref="toolsControl"></tools-control></el-col>
                <el-col :span="4"><static-marker ref="staticMarker"></static-marker></el-col>
                <el-col :span="4"><driving-nav  ref="drivingNav"></driving-nav></el-col>
            </el-row>
        </div>
        <div id="panelMapDrivingNav" ref="mapDrivingNav"></div>
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
//import DrivingNav from './function/drivingNav.js'

import toolsControl from './function/toolsControl'
import staticMarker from './function/staticMarker'
import drivingNav from './function/drivingNav'


export default {
    components: {toolsControl, staticMarker, drivingNav},
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
    },
    computed: {
        ...mapState({
            mapNav: state => state.mapStateWatch.mapNav
        })
    },
    methods: {
        init(){
            this.map = new AMap.Map('map1', amap.defaultOption);
            this.AMap = AMap;
            AMap.plugin(['AMap.ToolBar', 'AMap.Scale', 'AMap.OverView'], function () {
            });
 
            this.$refs.toolsControl.init(this.map, this.AMap);
            this.$refs.staticMarker.init(this.map, this.AMap);
            this.$refs.drivingNav.init(this.map, this.AMap, this.$refs.mapDrivingNav);
            console.log("1");
            this.mapNav.origin.x = 118.716087;
            console.log(this.mapNav.origin.x);
            this.mapNav.origin.y = 33.720534;
            console.log(this.mapNav.origin.y);
            this.mapNav.destination.x = 118.720623;
            console.log(this.mapNav.destination.x);
            this.mapNav.destination.y = 33.70349;
            console.log(this.mapNav.destination.y);
            console.log(2);
            console.log(this.mapNav.origin);
            this.mapNav.flag = !this.mapNav.flag;
            console.log(3);
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

#panelMapDrivingNav{
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

