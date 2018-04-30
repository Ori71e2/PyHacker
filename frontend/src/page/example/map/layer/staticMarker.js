'use strict';
class StaMarker {
    constructor(map, AMap) {
        this.map = map;
        this.AMap = AMap
        this.treeMarkers = [];
        this.treeMarkersInfo = [{
            icon: 'http://webapi.amap.com/theme/v1.3/markers/n/mark_b1.png',
            position: [118.708555, 33.723568]
        }, {
            icon: 'http://webapi.amap.com/theme/v1.3/markers/n/mark_b2.png',
            position: [118.703406, 33.722462]
        }, {
            icon: 'http://webapi.amap.com/theme/v1.3/markers/n/mark_b3.png',
            position: [118.707182, 33.719731]
        }];
        /*
        new AMap.Marker({
            map: this.map,
            position: [118.707182, 33.719731],
            icon: new this.AMap.Icon({            
            size: new this.AMap.Size(40, 50),  //图标大小
            image: "http://webapi.amap.com/theme/v1.3/images/newpc/way_btn2.png",
            imageOffset: new this.AMap.Pixel(0, -60)
            })        
        });
        */
        console.log('Marker Success');
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
    draw() {
    
    }
}
export default StaMarker;