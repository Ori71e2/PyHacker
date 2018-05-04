'use strict';
class DrivingNav {
    constructor(map, AMap) {
        this.map = map;
        this.AMap = AMap;
        //构造路线导航类
        AMap.service(["AMap.Driving"], function() {
        // 不在回调函数里初始化this.drivingNav，会出错，但找不到原因
        });
        this.drivingNav = new AMap.Driving({
            map: this.map,
            panel: "panelNav",
            //policy: AMap.DrivingPolicy.LEAST_TIME
            });
        //this.driving.search(new AMap.LngLat(118.716087,33.720534), new AMap.LngLat(118.720623, 33.70349));  
    }
    search(origin, destination) {
        // 根据起终点经纬度规划驾车导航路线
        //this.drivingNav.search(new this.AMap.LngLat(118.716087,33.720534), new this.AMap.LngLat(118.720623, 33.70349));  
        this.drivingNav.search(new this.AMap.LngLat(origin[0], origin[1]), new this.AMap.LngLat(destination[0], destination[1])); 
    }
}
export default DrivingNav;