<template>
        <div>
            <el-popover placement="top" trigger="hover">

                <div>
                    <el-row type="flex" class="row-bg" justify="space-around" :gutter="20">
                        <el-col :span="2">
                            <div class="tag">
                                <el-tag type="success">起点X</el-tag>
                            </div>
                        </el-col>
                        <el-col :span="8">
                            <div>
                                <el-input placeholder="请输入内容" v-model="originX"></el-input>
                            </div>
                        </el-col>
                        <el-col :span="2">
                            <div class="tag">
                                <el-tag type="warning">终点X</el-tag>
                            </div>
                        </el-col>
                        <el-col :span="8">
                            <div>
                                <el-input placeholder="请输入内容" v-model="destinationX"></el-input>
                            </div>
                        </el-col>
                        <el-col :span="4">
                            <div>
                                <el-button  type="success" icon="el-icon-location">选取起点</el-button>
                            </div>
                        </el-col>
                        <el-col :span="4">
                            <div>
                                  <el-button type="primary" v-on:click="toggleDrivingSearch">开始规划</el-button>
                            </div>
                        </el-col>
                        <el-col :span="4">
                            <div>
                                  <el-button type="primary">隐藏文字</el-button>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row type="flex" class="row-bg" justify="space-around" :gutter="20">
                        <el-col :span="2">
                            <div class="tag">
                                <el-tag type="success">起点Y</el-tag>
                            </div>
                        </el-col>
                        <el-col :span="8">
                            <div>
                                <el-input placeholder="请输入内容" v-model="originY"></el-input>
                            </div>
                        </el-col>
                        <el-col :span="2">
                            <div class="tag">
                                <el-tag type="warning">终点Y</el-tag>
                            </div>
                        </el-col>
                        <el-col :span="8">
                            <div>
                                <el-input placeholder="请输入内容" v-model="destinationY"></el-input>
                            </div>
                        </el-col>
                        <el-col :span="4">
                            <div>
                                <el-button type="warning" icon="el-icon-location">选取终点</el-button>
                            </div>
                        </el-col>
                        <el-col :span="4">
                            <div>
                                  <el-button type="danger">取消路径</el-button>
                            </div>
                        </el-col>
                        <el-col :span="4">
                            <div>
                                  <el-button type="danger">隐藏路径</el-button>
                            </div>
                        </el-col>
                    </el-row>
                </div>

                <el-button slot="reference" type="primary">
                    号航<i class="el-icon-arrow-up el-icon--right"></i>
                </el-button>
            </el-popover>
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
            drivingNav: '',
            originX: '',
            originY: '',
            destinationX: '',
            destinationY: ''
        }
    },
    mounted() {
        //console.log("mapNav.flag " + this.mapNav.flag);
    },
    activated() {
        //this.dyLayer = new DyLayer(this.map, AMap);
    },
    computed: {
        ...mapState({
            mapNav: state => state.mapStateWatch.mapNav
        }),
        getMapNavFlag() {
            return this.mapNav.flag;
        },
        getNavState() {
        }
    },
    watch: {
        getMapNavFlag(newVal, oldVal) {
            alert(this.mapNav.flag);
            this.originX = this.mapNav.origin.x;
            this.originY = this.mapNav.origin.y;
            this.destinationX = this.mapNav.destination.x;
            this.destinationY = this.mapNav.destination.y;
        }
    },
    methods: {
        ...mapActions({
            getLine: 'equipment/getLine',
            getTreeInfo: 'equipment/getTreeInfo'
        }),
        init(map, amap){
            // 设置toolBar
            this.map = map;
            this.AMap = amap;
            //构造路线导航类
            AMap.service(["AMap.Driving"], function() {
            // 不在回调函数里初始化this.drivingNav，会出错，但找不到原因
            });
            this.drivingNav = new AMap.Driving({
                map: this.map,
                //panel: "panelNav",
                //policy: AMap.DrivingPolicy.LEAST_TIME
                });
        },
        toggleDrivingSearch() {
            alert(1);
            var errorMsg = ""
            // 根据起终点经纬度规划驾车导航路线
            //this.drivingNav.search(new this.AMap.LngLat(118.716087,33.720534), new this.AMap.LngLat(118.720623, 33.70349));
            if (this.originX < 0 || this.originX > 180) {
                errorMsg = " 起点经度 ";
            }
            if (this.originY < 0 || this.originY > 90) {
                errorMsg = errormsg + " 起点维度 ";
            }
            if (this.destinationX < 0 || this.destinationX > 180) {
                errorMsg = errorMsg + " 终点经度 ";
            }
            if (this.destinationY < 0 || this.destinationY > 90) {
                errorMsg = errorMsg + " 终点维度 ";
            }
            if (errorMsg != "") {
                errorMsg += "取值不在范围内！"
                alert(errormsg);
                return;
            } 
            console.log("this.originX" + this.originX);
            console.log("this.originX" + this.originY);
            console.log("this.originX" + this.destinationX);
            console.log("this.originX" + this.destinationY);
            this.drivingNav.search(new this.AMap.LngLat(this.originX, this.originY), new this.AMap.LngLat(this.destinationX, this.destinationY)); 
        }
    }
}
</script>
<style scoped>
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

