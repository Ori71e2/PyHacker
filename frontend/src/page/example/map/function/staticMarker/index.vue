<template>
        <div>
            <el-popover placement="top" trigger="hover">
                <el-checkbox-group  v-model="checkedMarkerList" @change="handleCheckedMarkerChange">
                    <el-checkbox ref="scale" v-model="treeVal"  label="树木" @change="toggletree"></el-checkbox>
                    <el-checkbox ref="fishBoard" v-model="fishBoardVal" label="钓鱼牌" @change="togglefishBoard"></el-checkbox>
                    <el-checkbox ref="billBoard" v-model="billBoardVal" label="广告牌"  @change="togglebillBoard"></el-checkbox>
                </el-checkbox-group>
                <el-button slot="reference" type="primary">
                    标注<i class="el-icon-arrow-up el-icon--right"></i>
                </el-button>
            </el-popover>
        </div>
</template>

<script>
/* eslint-disable */
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
    data() {
        return {
            map: '',
            AMap: '',
            treeMarkers: [],
            treeMarkersInfo: '',
            infoWindow: '',

            checkedMarkerList: [], // 所有字段都是必须的，否则没法勾选
            treeVal: false,
            fishBoardVal: false,
            billBoardVal: false
        }
    },
    mounted() {
    },
    activated() {
        //this.dyLayer = new DyLayer(this.map, AMap);
    },
    methods: {
        ...mapActions({
            getTreeInfo: 'equipment/getTreeInfo'
        }),
        init(map, amap){
            // 设置toolBar
            this.map = map;
            this.AMap = amap;
            // marker点击展示信息窗口
            this.infoWindow = new this.AMap.InfoWindow({offset: new this.AMap.Pixel(0, -30)});   
        },
        handleCheckedMarkerChange(value) {
            //this.toolsBar.changeTools(value);
        },
        toggletree() {
            this.getTreeInfo().then(res => {
                if(res) {
                    this.treeMarkersInfo = res;
                    this.drawTreeMarker();
                } else {
                    return false;
                }
            }).catch(err => {
                return false;
            })
        },
        togglefishBoard() {
        },
        togglebillBoard() {
        },
        // 若是采取实时更新，则需要先把之前的marker清除，可以采取优化，比较不同数据，清除新增。
        drawTreeMarker() {
            console.log(this.flag);
            this.treeMarkersInfo.forEach(function(marker) {
                var marker = new this.AMap.Marker({
                    map: this.map,
                    icon: marker.icon,
                    position: [marker.position[0], marker.position[1]],
                    offset: new this.AMap.Pixel(-12, -36)
                });
                marker.content = '我是Marker';
                // 回调函数，要注意第三个参数 context
                marker.on('click', this.markerClick, this);
                marker.emit('click', {target: marker});
                this.treeMarkers.push(marker);
            }, this);
            this.map.setFitView();  
        },
        markerClick(e) {
            this.infoWindow.setContent(e.target.content);
            this.infoWindow.open(this.map, e.target.getPosition());
        }
    }
}
</script>
<style scoped>
.el-icon-arrow-down {
    font-size: 12px;
}
</style>

