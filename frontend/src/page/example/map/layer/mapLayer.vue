<template>
    <div id="maplayer" class="map-container"></div>
</template>

<script>
/* eslint-disable */
import { mapState, mapMutations, mapActions } from 'vuex'

import amap from '@/util/amap'
import EqLayer from './equipmentLayer'
import StaLayer from './staticLayer.js'
import EqDraw from './equipmentDraw.js'

var map, eqCanvas, dyCanvas, staCanvas
var canvas = new Array();
export default {
    mounted() {
        amap.load(() => {
            this.init()
        })
    },
    methods: {
        ...mapActions({
            getLine: 'equipment/getLine'
        }),
        init() {
            map = new AMap.Map('maplayer', amap.defaultOption)
            AMap.plugin(['AMap.ToolBar', 'AMap.Scale', 'AMap.CustomLayer'], function () {
                map.addControl(new AMap.ToolBar())
                map.addControl(new AMap.Scale())
            })
            //var eqLayer = new EqLayer(map, AMap);
            var staLayer = new StaLayer(map, AMap);
            var eqDraw = new EqDraw(map, AMap);
            this.getLine().then(res => {
                if(res.data) {
                    eqDraw.drawPolyLine(res.data);
                } else {
                    return false;
                }
            }).catch(err => {
                console.log('No Data');
                return false;
            })
  
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

