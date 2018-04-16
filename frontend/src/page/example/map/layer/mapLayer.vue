<template>
    <div id="maplayer" class="map-container"></div>
</template>

<script>
/* eslint-disable */
import amap from '@/util/amap'
import EqLayer from './equipmentLayer'
import StaLayer from './staticLayer.js'
import EqDraw from './equipmentDraw.js'
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
            //var eqLayer = new EqLayer(map, AMap);
            var staLayer = new StaLayer(map, AMap);
            var eqDraw = new EqDraw(map, AMap);
            /*
            var lineArr = [[118.720366, 33.69942], [118.720623, 33.70349], [118.721053, 33.707703], [118.720967, 33.713343], [118.721224, 33.718769], [118.71719, 33.719412], [118.715044, 33.717484]];
            var polyline = new AMap.Polyline({
                path: lineArr,
                strokeColor: '#3366FF',
                strokeOpacity: 1,
                strokeWeight: 5,
                strokeStyle: 'solid',
                strokeDasharray: [10, 5]
            });
            polyline.setMap(map);
            */

  
            
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

