<template>
    <div class="map-container">
        <div id="map1" class="map-container"></div>
        <div id="panelNav"></div>
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
import DrivingNav from './tools/drivingNav.js'
//var map, eqCanvas, dyCanvas, staCanvas

export default {
    data() {
        return {
            staMarker: '',
            eqDraw: '',
            dyLayer: '',
            drivingNav: '',
            map: '',
            AMap: ''
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
            AMap.plugin(['AMap.ToolBar', 'AMap.Scale'], function () {
                this.map.addControl(new AMap.ToolBar())
                this.map.addControl(new AMap.Scale())
            })
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
            this.drivingNav.search([118.716087,33.720534], [118.683643,33.763144]);
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
</style>

