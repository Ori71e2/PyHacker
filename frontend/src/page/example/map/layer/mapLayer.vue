<template>
    <div id="maplayer" class="map-container"></div>
</template>

<script>
/* eslint-disable */
import amap from '@/util/amap'
import EqLayer from './equipmentLayer'
import StaLayer from './staticLayer.js'
var map, eqCanvas, dyCanvas, staCanvas
var canvas = new Array();
export default {
    mounted() {
        amap.load(() => {
            this.init()
        })
    },
    methods: {
        init() {
            map = new AMap.Map('maplayer', amap.defaultOption)
            AMap.plugin(['AMap.ToolBar', 'AMap.Scale', 'AMap.CustomLayer'], function () {
                map.addControl(new AMap.ToolBar())
                map.addControl(new AMap.Scale())
            })
            var eqLayer = new EqLayer(map, AMap);
            //eqLayer.layer.setMap(map);

            var staLayer = new StaLayer(map, AMap);


  
            
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

