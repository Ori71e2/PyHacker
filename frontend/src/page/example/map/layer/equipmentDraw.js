'use strict';
class EqDraw {
    constructor(map, AMap) {
        this.map = map;
        this.AMap = AMap;
    }
    drawPolyLine(path) {
        this.polyline = new this.AMap.Polyline({
            path: path,
            strokeColor: "#3366FF",
            strokeOpacity: 1,
            strokeWeight: 3,
            strokeStyle: "solid",
            strokeDasharray: [10, 5]
        });
        this.polyline.setMap(this.map);
        this.polyline.on('click', function(){alert("Over")});      
    }
}
export default EqDraw;