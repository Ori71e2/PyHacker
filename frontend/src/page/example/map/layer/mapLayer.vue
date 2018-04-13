<template>
    <div id="maplayer" class="map-container"></div>
</template>

<script>
/* eslint-disable */
import amap from '@/util/amap'
import EqLayer from './equipmentLayer'
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
            eqLayer.layer.setMap(map);
            //eqLayer.layer.render =  eqLayer.onRender();

/*
          
            for (var i=0; i<3; i++) {
                canvas[i]= document.createElement('canvas');
                canvas[i].width = map.getSize().width;
                canvas[i].height = map.getSize().height;
            }
            [eqCanvas, dyCanvas, staCanvas] = canvas;
           
            var eqLayer = new AMap.CustomLayer(eqCanvas, {
                        zooms: [3,20],
                        zIndex: 12
                    });
            eqLayer.setMap(map);
            eqLayer.render = eqOnRender;

            var eqCtx = eqCanvas.getContext('2d');
            var pos, started
            function eqOnRender() {
                pos = map.lngLatToContainer([118.716184,33.720615]);
                eqDraw();

            }
            function eqDraw() {
                eqCtx.clearRect(0, 0, eqCanvas.width, eqCanvas.height);
                eqCtx.beginPath();
                eqCtx.arc(pos.x, pos.y, 50, 0, 2*Math.PI);
                eqCtx.stroke();
            }
       
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

