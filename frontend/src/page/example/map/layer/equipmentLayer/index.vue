<template>
    <div></div>
</template>
>
<script>
/* eslint-disable */
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
    data() {
        return {
            map: '',
            AMap: '',
            posArray: '',
            polyline: ''
        }
    },
    mounted() {
    },
    methods: {
        init(map, amap){
            this.map = map;
            this.AMap = amap;
            this.posArray = [[118.720366, 33.69942], [118.720623, 33.70349], [118.721053, 33.707703], [118.720967, 33.713343], [118.721224, 33.718769], [118.71719, 33.719412], [118.715044, 33.717484]];
            console.log('begin polyline');
            this.polyline = new this.AMap.Polyline({
                path: this.posArray,
                strokeColor: "#3366FF",
                strokeOpacity: 1,
                strokeWeight: 3,
                strokeStyle: "solid",
                strokeDasharray: [10, 5]
            });
            console.log('polyline ini');
            this.polyline.setMap(this.map);
            this.polyline.on('click', function(e) {
                this.polylineBind(e);
            }, this)
        },
        draw() {
            
        },

        polylineBind(e) {
            console.log('e.lnglat');
            console.log(e.lnglat);
            this.getPointOnSegment(this.posArray, e.lnglat);        
        },
        getPointOnSegment(array, pos) {
            console.log('beging search')
            for(var i in array) {
                console.log(i);
                console.log(array[i])
                if(this.AMap.GeometryUtil.isPointOnSegment(pos, this.AMap.LngLat(array[i][0],array[i][1]), this.AMap.LngLat(array[i+1][0], array[i+1][1]), 0.0000001)) {
                    console.log(i);
                    return i;
                }
            }
        }   
    }
}
</script>
