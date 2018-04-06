<template>
    <div class="sys-page">
        <div class="note">
            <v-pageNotes>本层为浮动层。本页实际路径: src/page/example/map.vue</v-pageNotes>
        </div>
        <div id="container">
            <maplayer></maplayer>
        </div>
    </div>
</template>

<script>
import maplayer from './layer/mapLayer'
export default {
    components: {maplayer}
}
</script>
<style lang="scss" scoped>
#container{
    width: 100%;
    height: 100%;
}
.note{
    position: absolute;
    top: 0px;
    left: 0;
    width: 100%;
    z-index: 1000;
}
</style>

