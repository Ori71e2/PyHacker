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
        ...mapActions({
            getLine: 'equipment/getLine',
        }),
        init(map, amap){
            this.map = map;
            this.AMap = amap;
            //this.posArray = [[118.720366, 33.69942], [118.720623, 33.70349], [118.721053, 33.707703], [118.720967, 33.713343], [118.721224, 33.718769], [118.71719, 33.719412], [118.715044, 33.717484]];
            this.getLine().then(res => {
                if(res) {
                    this.drawPolyLine(res);
                } else {
                    console.log('line get fail');
                    return false;
                }
            }).catch(err => {
                console.log('No Data');
                return false;
            })

        },
        drawPolyLine(res) {
            console.log('begin polyline');
            this.polyline = new this.AMap.Polyline({
                path: this.GPSToLngLat(res),
                strokeColor: "#3366FF",
                strokeOpacity: 1,
                strokeWeight: 3,
                strokeStyle: "solid",
                strokeDasharray: [10, 5],
                extData: {
                    id: 1,
                    path: res
                }
            });
            console.log('polyline ini');
            this.polyline.setMap(this.map);
            this.polyline.on('click', function(e) {
                this.polylineBind(e);
            }, this)
        },

        polylineBind(e) {
            // 获取对象属性，我们可以给其定义唯一的id进行路径标识
            this.getPointOnSegment([e.lnglat.L, e.lnglat.N], e.target.getExtData().path);        
        },
        getPointOnSegment(pos, array) {
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
        // GPS坐标数组转换为LngLat对象数组
        GPSToLngLat(path) {
            var LngLatArray = [];
            for(var i=0; i<this.arrayCount(path); i++) {
                LngLatArray.push(new this.AMap.LngLat(path[i][0], path[i][1]));
            }
            return LngLatArray;
        },
        // 计算数组元素个数
        arrayCount(array) {
            var objType = typeof array;
            if (objType == "string") {
                return array.length;
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
