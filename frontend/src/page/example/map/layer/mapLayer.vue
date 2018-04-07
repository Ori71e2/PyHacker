<template>
    <div id="maplayer" class="map-container"></div>
</template>

<script>
/* eslint-disable */
import amap from '@/util/amap'
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
            for (var i=0; i<3; i++) {
                canvas[i]= document.createElement('canvas');
                canvas[i].width = map.getSize().width;
                canvas[i].height = map.getSize().height;
            }
            [eqCanvas, dyCanvas, staCanvas] = canvas;
            /*
            eqCanvas = document.createElement('canvas');
            eqCanvas.width = map.getSize().width;
            eqCanvas.height = map.getSize().height;
            */
           
            var ctx = eqCanvas.getContext('2d');
            var pos, started
            var customLayer = new AMap.CustomLayer(eqCanvas, {
                        zooms: [3,20],
                        zIndex: 12
                    });
            customLayer.setMap(map);
            function onRender() {
                pos = map.lngLatToContainer([118.716184,33.720615]);
                draw();

            }
            function draw() {
                ctx.clearRect(0, 0, eqCanvas.width, eqCanvas.height);
                ctx.beginPath();
                ctx.arc(pos.x, pos.y, 50, 0, 2*Math.PI);
                ctx.stroke();
            }
            customLayer.render = onRender;
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

