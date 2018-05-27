<template>
    <div id="drawing"></div>
</template>
>
<script>
/* eslint-disable */
import { mapState, mapMutations, mapActions } from 'vuex'
import SVG from 'svg.js'

export default {
    data() {
        return {
            map: '',
            AMap: '',
            width: '',
            height: '',
            svg: '',
            layer: '',
            svgDraw: '',
            posArray: '',
            polyline: '',
            clickListener: '',
            polylineClickListener: ''
        }
    },
    mounted() {
    },
    methods: {
        init(map, amap){
            this.map = map;
            this.AMap = amap;
            this.width = this.map.getSize().width
            this.height = this.map.getSize().height

            this.svg = document.createElement('svg');
            this.svgDraw = SVG(this.svg).size(this.width, this.height);

            this.svg.width = map.getSize().width;
            this.svg.height = map.getSize().height;
            
            this.layer = new AMap.CustomLayer(this.svg, {
                                zooms: [3, 20],
                                zIndex: 12
                            });
            
            //this.svgt = document.createElement('svgt');
            //this.svgDraw = SVG('drawing').size(this.width, this.height);
            this.layer.render =  this.onRender();
            this.layer.setMap(this.map);
            
            this.posArray = [[118.720366, 33.69942], [118.720623, 33.70349], [118.721053, 33.707703], [118.720967, 33.713343], [118.721224, 33.718769], [118.71719, 33.719412], [118.715044, 33.717484]];
            Array.prototype.GpsToCo = function(map) {
                var arr = [];
                for(var i=0; i<this.length; i++) {
                    var pos = map.lngLatToContainer(this[i]);
                    arr.push([pos.x, pos.y]);
                }
                return arr;
            }
            /*
            this.map.on("dragging", function (e) {  
                this.redraw();  
            }, this);  
            this.map.on("zoomchange", function (e) {  
                this.redraw();  
            }, this);  
            this.map.on("resize", function (e) {  
                this.redraw();  
            }, this);  
            */
        },
        draw() {
            console.log('Begin addDomListener');
            if (this.polylineClickListener) {
                this.AMap.event.removeListener(this.polylineClickListener);
            }
            this.svgDraw.clear();
            this.svgDraw.polyline(this.posArray.GpsToCo(this.map)).fill('none').stroke({width:1});
            this.polyline = this.svgDraw.polyline(this.posArray.GpsToCo(this.map)).fill('none').stroke({width:1});
            console.log('this.polyline');
            console.log(this.polyline);   
            this.polyline.mouseover(this.polylineBind());         
            this.polylineClickListener = this.AMap.event.addDomListener(this.polyline.native(), 'click', this.polylineBind(), this);
            console.log('this.polyline.node');
            console.log(this.polyline.node);
            console.log('this.polyline.native()');
            console.log(this.polyline.native());
            console.log('this.polylineClickListener');
            console.log(this.polylineClickListener);
        },
        redraw() {

        },
        onRender() { 
            return () => {
                this.draw();    
            }
        },
        polylineBind() {
            return () => {
                //this.removeClickListener();
                alert('this.polyline');
            }
        },
        removeClickListener(clickListener) {
            if (clickListener) {
                AMap.event.removeListener(clickListener);//移除事件，以绑定时返回的对象作为参数
            }
        }        
    }
}
</script>
