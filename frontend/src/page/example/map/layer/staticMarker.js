'use strict';
class StaMarker {
    constructor(map, AMap) {
        this.map = map;
        this.AMap = AMap
        this.treeMarkers = [];
        this.treeMarkersInfo = [];
        /*
        [{
            icon: 'http://webapi.amap.com/theme/v1.3/markers/n/mark_b1.png',
            position: [118.708555, 33.723568]
        }, {
            icon: 'http://webapi.amap.com/theme/v1.3/markers/n/mark_b2.png',
            position: [118.703406, 33.722462]
        }, {
            icon: 'http://webapi.amap.com/theme/v1.3/markers/n/mark_b3.png',
            position: [118.707182, 33.719731]
        }];
        */
        // 数组forEach回调函数，要把this当参数传递进去
        /*
        this.treeMarkersInfo.forEach(function(marker) {
            var marker = new this.AMap.Marker({
                map: this.map,
                icon: marker.icon,
                position: [marker.position[0], marker.position[1]],
                offset: new this.AMap.Pixel(-12, -36)
            });
            this.treeMarkers.push(marker);
        }, this);  
        */
    }
    // 若是采取实时更新，则需要先把之前的marker清除，可以采取优化，比较不同数据，清除新增。
    drawTreeMarker(data) {
        this.treeMarkersInfo = data;
        this.treeMarkersInfo.forEach(function(marker) {
            var marker = new this.AMap.Marker({
                map: this.map,
                icon: marker.icon,
                position: [marker.position[0], marker.position[1]],
                offset: new this.AMap.Pixel(-12, -36)
            });
            this.treeMarkers.push(marker);
        }, this);  
    }
}
export default StaMarker;