<template>
    <div>
        <div>
            <el-popover placement="top" trigger="hover">
                <div>
                    <el-row type="flex" justify="space-between" :gutter="20" >
                        <el-col :span="8">
                            <el-button  type="success" v-on:click="toggleStartGeolocation">开始定位</el-button>
                        </el-col>
                        <el-col :span="8">
                            <el-button type="warning"  v-on:click="toggleRealTimeGeolocation">实时定位</el-button>
                        </el-col>
                        <el-col :span="8">
                            <el-button type="danger" v-on:click="toggleStopGeolocation">取消定位</el-button>
                        </el-col>
                    </el-row>
                </div>
                <el-button slot="reference" type="primary">
                    定位<i class="el-icon-arrow-up el-icon--right"></i>
                </el-button>
            </el-popover>
        </div>
    </div>
</template>

<script>
/* eslint-disable */

import { mapState, mapMutations, mapActions } from 'vuex'

//var map, eqCanvas, dyCanvas, staCanvas

export default {
    data() {
        return {
            map: '',
            AMap: '',
            geolocation: ''
        }
    },
    mounted() {

    },
    activated() {

    },
    computed: {

    },
    watch: {

    },
    methods: {
        init(map, amap, element){
            this.map = map;
            this.AMap = amap;
            
            this.geolocation = new AMap.Geolocation({
                enableHighAccuracy: true,//是否使用高精度定位，默认:true
                timeout: 10000,          //超过10秒后停止定位，默认：无穷大
                maximumAge: 0,           //定位结果缓存0毫秒，默认：0
                convert: true,           //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
                //showButton: true,        //显示定位按钮，默认：true
                //buttonPosition: 'LB',    //定位按钮停靠位置，默认：'LB'，左下角
                //buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
                showMarker: true,        //定位成功后在定位到的位置显示点标记，默认：true
                showCircle: true,        //定位成功后用圆圈表示定位精度范围，默认：true
                panToLocation: true,     //定位成功后将定位到的位置作为地图中心点，默认：true
                zoomToAccuracy:true      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
            });
            this.map.addControl(this.geolocation);
            //this.geolocation.getCurrentPosition();
            this.AMap.event.addListener(this.geolocation, 'complete', this.onGeolocationComplete);//返回定位信息
            this.AMap.event.addListener(this.geolocation, 'error', this.onGeolocationError);      //返回定位出错信息
            
        },
        toggleStartGeolocation() {
            this.geolocation.getCurrentPosition();
        },
        toggleRealTimeGeolocation() {
        },
        toggleStopGeolocation() {
        },
        onGeolocationComplete(data) {
            console.log('经度：' + data.position.getLng());
            console.log('纬度：' + data.position.getLat());
            if(data.accuracy){
                console.log('精度：' + data.accuracy + ' 米');
            }//如为IP精确定位结果则没有精度信息
            console.log('是否经过偏移：' + (data.isConverted ? '是' : '否'));
            console.log('Geolocation Success');
        },
        onGeolocationError(data) {
            console.log('Geolocation Filed');
        }
    }
}
</script>
<style scoped>
.panelMapNav {
    position: fixed;
    background-color: white;
    max-height: 70%;
    overflow-y: auto;
    top: -20px;
    right: 10px;
    width: 280px;
}
.el-icon-arrow-down {
    font-size: 12px;
}

.position-float-left {
    float: left;
}

.position-float-none {
    float: none;
}
.tag {
    margin-top: 5px;
}

</style>

