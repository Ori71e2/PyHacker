<template>
        <div>
            <el-popover placement="top" trigger="hover">
                <div>
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
        }
    },
    mounted() {

    },
    activated() {
        //this.dyLayer = new DyLayer(this.map, AMap);
    },
    computed: {
        ...mapState({
            mapNav: state => state.mapNav
        }),
        mapNavStateVal() {
            return this.mapNav.state;
        },
        getNavState() {
            return this.$store.getters.getNavState;
        }
    },
    watch: {
        mapNavStateVal(val, oldval) {
            
        },
        getNavState(val) {
            if (val == true) {
                showNav();
            } else {
                closeNav();
            }
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
            console.log('tools-control');

        },
    }
}
</script>
<style scoped>
.el-icon-arrow-down {
    font-size: 12px;
}
</style>

