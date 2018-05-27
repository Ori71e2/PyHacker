<template>
    <div>
    </div>
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
            canvas: '',
            layer: '',
            ctx: '',
            clickListener: '',
            ctxClickListener: ''
        }
    },
    mounted() {
    },
    methods: {
        init(map, amap){
            this.map = map;
            this.AMap = amap;
            this.canvas = document.createElement('canvas');
            this.canvas.width = map.getSize().width;
            this.canvas.height = map.getSize().height;
            this.layer = new AMap.CustomLayer(this.canvas, {
                                zooms: [3, 20],
                                zIndex: 12
                            })
            this.ctx = this.canvas.getContext('2d');
            this.layer.render =  this.onRender();
            this.layer.setMap(this.map);
        },
        draw() {
            this.pos = this.map.lngLatToContainer([118.706667,33.720856]);
            if (this.ctxClickListener) {
                this.AMap.event.removeListener(this.ctxClickListener);
            }
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.ctx.beginPath();
            this.ctx.arc(this.pos.x, this.pos.y, 50, 0, 2*Math.PI);
            this.ctx.stroke();
            console.log('this.canvas');
            console.log(this.canvas);
            this.ctxClickListener = this.AMap.event.addDomListener(this.canvas, 'click', this.Bind(), this);
            console.log('this.ctxClickListener')
            console.log(this.ctxClickListener)
        },
        onRender() { 
            return () => {
                this.draw();    
            }
        },
        Bind() {
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
