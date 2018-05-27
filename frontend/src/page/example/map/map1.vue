<template>
    <div class="map-container">
        <div id="map1" class="map-container"></div>
        <div id="panelNav"></div>
        <div id="panelTools">
            <el-row type="flex" class="row-bg" justify="space-around" :gutter="20">
                <el-col :span="4"><tools-control ref="toolsControl"></tools-control></el-col>
                <el-col :span="4"><static-marker ref="staticMarker"></static-marker></el-col>
                <el-col :span="4"><driving-nav  ref="drivingNav"></driving-nav></el-col>
                <el-col :span="4"><geolocation ref="geolocation"></geolocation></el-col>
            </el-row>
        </div>
        <div id="panelMapDrivingNav" ref="mapDrivingNav"></div>
        <equipment-layer  ref="equipmentLayer"></equipment-layer>
        <dynamic-layer  ref="dynamicLayer"></dynamic-layer>

    </div>
</template>

<script>
/* eslint-disable */
/* eslint-disable */
import { mapState, mapMutations, mapActions } from 'vuex'
import amap from '@/util/amap'
import equipmentLayer from './layer/equipmentLayer'
import dynamicLayer from './layer/dynamicLayer'

import EqDraw from './layer/equipmentDraw.js'

import toolsControl from './function/toolsControl'
import staticMarker from './function/staticMarker'
import drivingNav from './function/drivingNav'
import geolocation from './function/geolocation'


export default {
    components: {toolsControl, staticMarker, drivingNav, geolocation, equipmentLayer, dynamicLayer},
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
            // 所有插件在amap.js中添加
            this.$refs.toolsControl.init(this.map, this.AMap);
            this.$refs.staticMarker.init(this.map, this.AMap);
            this.$refs.drivingNav.init(this.map, this.AMap, this.$refs.mapDrivingNav);
            this.$refs.geolocation.init(this.map, this.AMap);
            this.$refs.equipmentLayer.init(this.map, this.AMap);
            this.$refs.dynamicLayer.init(this.map, this.AMap);


            this.mapNav.origin.x = 118.716087;
            this.mapNav.origin.y = 33.720534;
            this.mapNav.destination.x = 118.720623;
            this.mapNav.destination.y = 33.70349;
            //this.mapNav.flag = !this.mapNav.flag;
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

