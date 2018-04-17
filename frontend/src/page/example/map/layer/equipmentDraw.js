'use strict';
class EqDraw {
    constructor(map, AMap) {
        /*
        this.lineArr = [[118.720366, 33.69942], [118.720623, 33.70349], [118.721053, 33.707703], [118.720967, 33.713343], [118.721224, 33.718769], [118.71719, 33.719412], [118.715044, 33.717484]];
        this.polyline = new AMap.Polyline({
            path: this.lineArr,
            strokeColor: "#3366FF",
            strokeOpacity: 1,
            strokeWeight: 5,
            strokeStyle: "solid",
            strokeDasharray: [10, 5]
        });
        */
        store.dispatch('equipment/getLine').then(res => {
            this.polyline = new AMap.Polyline({
                path: res.data,
                strokeColor: "#3366FF",
                strokeOpacity: 1,
                strokeWeight: 5,
                strokeStyle: "solid",
                strokeDasharray: [10, 5]
            });
            this.polyline.setMap(map);
            this.polyline.on('click', function(){alert("Over")});
        }).catch(() => {
            console.log('无法获取数据')
        })
        //this.polyline.setMap(map);
        //this.polyline.on('mouseover', function(){alert("Over")});
        //this.polyline.on('click', function(){alert("Over")});
    }
    draw() {
        this.pos = this.map.lngLatToContainer([118.716184,33.720615]);
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.beginPath();
        this.ctx.arc(this.pos.x, this.pos.y, 50, 0, 2*Math.PI);
        this.ctx.stroke();        
    }

    onRender() { 
        return () => {
            this.draw();    
        }
    }
}
export default EqDraw;