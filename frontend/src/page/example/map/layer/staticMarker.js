'use strict';
class StaMarker {
    constructor(map, AMap) {
        this.map = map;
        this.AMap = AMap
        this.treeMarkers = [];
        this.treeMarkersInfo = [];
        this.infoWindow = new this.AMap.InfoWindow({offset: new this.AMap.Pixel(0, -30)});
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
            console.log('fail1');
            marker.content = '我是Marker';
            console.log('fail2');
            // 回调函数，要注意第三个参数 context
            marker.on('click', this.markerClick, this);
            console.log('fail3');
            //marker.emit('click', {target: marker});
            console.log('fail4');
            this.treeMarkers.push(marker);
        }, this);
        this.map.setFitView();  
    }

    markerClick(e) {
        this.infoWindow.setContent(e.target.content);
        this.infoWindow.open(this.map, e.target.getPosition());
    }
}
export default StaMarker;