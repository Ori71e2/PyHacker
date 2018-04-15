'use strict';
import SVG from 'svg.js'
class EqLayer {
    constructor(map, AMap) {
        this.map = map
        this.width = this.map.getSize().width
        this.height = this.map.getSize().height
        this.svg = document.createElement('svg');
        //this.svg.width = map.getSize().width;
        //this.svg.height = map.getSize().height;
        this.layer = new AMap.CustomLayer(this.svg, {
                            zooms: [3, 20],
                            zIndex: 12
                        });
        //this.svgDraw = SVG(this.svg).size(this.map.getSize().width, this.map.getSize().height);
        this.svgDraw = SVG(this.svg).size(this.width, this.height);
        this.layer.render =  this.onRender();
        this.layer.setMap(map);
    }
    draw() {
        //this.pos = this.map.lngLatToContainer([118.716184,33.720615]);
        this.pos = this.map.lngLatToContainer([118.716184,33.720615]);
        this.svgDraw.clear();
        var x = this.pos.x;
        var y = this.pos.y;
        this.svgDraw.line(x, y, x+100, y+50).stroke({width:1});
    }

    onRender() { 
        return () => {
            this.draw();    
        }
    }
}
export default EqLayer;