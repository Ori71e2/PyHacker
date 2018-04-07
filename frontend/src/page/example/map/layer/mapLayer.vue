<template>
    <div id="maplayer" class="map-container"></div>
</template>

<script>
/* eslint-disable */
import amap from '@/util/amap'
var map
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
            var canvas = document.createElement('canvas');
            canvas.width = map.getSize().width;
            canvas.height = map.getSize().height;
            var ctx = canvas.getContext('2d');
            var pos, started
            var customLayer = new AMap.CustomLayer(canvas, {
                        zooms: [3,20],
                        zIndex: 12
                    });
            customLayer.setMap(map);
            function onRender() {
                pos = map.lngLatToContainer([118.716184,33.720615]);
                draw();

            }
            function draw() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
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

