<template>
    <div id="map1" class="map-container"></div>
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

//var map, eqCanvas, dyCanvas, staCanvas

export default {
    data() {
        return {
            staMarker: '',
            eqDraw: '',
            dyLayer: '',
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
        this.dyLayer = new DyLayer(this.map, AMap);
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
        }
    }
}
</script>
<style scoped>
.map-container{
    width: 100%;
    height: 100%;
}
</style>

