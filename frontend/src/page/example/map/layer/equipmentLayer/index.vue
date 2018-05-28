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
                path: this.dyadicArrayToLngLat(this.posArray),
                strokeColor: "#3366FF",
                strokeOpacity: 1,
                strokeWeight: 3,
                strokeStyle: "solid",
                strokeDasharray: [10, 5],
                extData: {
                    id: 1
                }
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
            console.log(e.target);
            // 获取对象属性，我们可以给其定义唯一的id进行路径标识
            console.log(e.target.getOptions().extData.id);
            this.getPointOnSegment(this.posArray, [e.lnglat.L, e.lnglat.N]);        
        },
        getPointOnSegment(array, pos) {
            console.log('beging search')
            for(var i=0;  i<this.arrayCount(array); i++) {
                if(array[i+1]) {
                    // 此处判断使用经纬度对
                    if(this.AMap.GeometryUtil.isPointOnSegment(pos, array[i], array[i+1])) {
                        console.log(i);
                        return i;
                    }
                }
                
            }
        },
        // 二维坐标数组转换为LngLat对象数组
        dyadicArrayToLngLat(dyadicArray) {
            var dyadicLngLatArray = [];
            for(var i=0; i<this.arrayCount(dyadicArray); i++) {
                dyadicLngLatArray.push(new this.AMap.LngLat(dyadicArray[i][0], dyadicArray[i][1]));
            }
            console.log('dyadicLngLatArray');
            console.log(dyadicLngLatArray);
            return dyadicLngLatArray;
        },
        // 计算数组元素个数
        arrayCount(array) {
            var objType = typeof array;
            if (objType == "string") {
                return obj.length;
            }else if(objType == "object") {
                var objLen = 0;
                for (var i in array) {
                    objLen++;
                }
                return objLen;
            }
            return false;
        }
    }
}
</script>
