'use strict';
class EqLayer {
    constructor(map, AMap) {
        this.map = map
        this.canvas = document.createElement('canvas');
        this.canvas.width = map.getSize().width;
        this.canvas.height = map.getSize().height;
        this.layer = new AMap.CustomLayer(this.canvas, {
                            zooms: [3, 20],
                            zIndex: 12
                        })
        this.ctx = this.canvas.getContext('2d');
        this.layer.render =  this.onRender();
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
export default EqLayer;