<template>
    <div id="map1" class="map-container"></div>
</template>

<script>
/* eslint-disable */
/* eslint-disable */
import { mapState, mapMutations, mapActions } from 'vuex'
import amap from '@/util/amap'
import EqLayer from './layer/equipmentLayer.js'
import StaLayer from './layer/staticLayer.js'
import EqDraw from './layer/equipmentDraw.js'
import DyLayer from './layer/dynamicLayer.js'

//var map, eqCanvas, dyCanvas, staCanvas

export default {
    data() {
        return {
            staLayer: '',
            eqDraw: '',
            dyLayer: '',
            map: '',
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
            getLine: 'equipment/getLine'
        }),
        init(){
            this.map = new AMap.Map('map1', amap.defaultOption);
            AMap.plugin(['AMap.ToolBar', 'AMap.Scale'], function () {
                this.map.addControl(new AMap.ToolBar())
                this.map.addControl(new AMap.Scale())
            })
            //var eqLayer = new EqLayer(map, AMap);
            this.staLayer = new StaLayer(this.map, AMap);
            this.eqDraw = new EqDraw(this.map, AMap);
            this.getLine().then(res => {
                alert(1);
                if(res) {
                    alert(res);
                    this.eqDraw.drawPolyLine(res);
                } else {
                    alert('line get fail');
                    return false;
                }
            }).catch(err => {
                console.log('No Data');
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

