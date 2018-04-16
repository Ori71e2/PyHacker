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
        this.svgDraw = SVG(this.svg).size(this.width, this.height);
        this.layer.render =  this.onRender();
        this.layer.setMap(map);
        this.posArray = [[118.720366, 33.69942], [118.720623, 33.70349], [118.721053, 33.707703], [118.720967, 33.713343], [118.721224, 33.718769], [118.71719, 33.719412], [118.715044, 33.717484]];
        Array.prototype.GpsToCo = function(map) {
            var arr = [];
            for(var i=0; i<this.length; i++) {
                var pos = map.lngLatToContainer(this[i]);
                arr.push([pos.x, pos.y]);
            }
            return arr;
        }
    }
    draw() {
        var pos = this.map.lngLatToContainer([118.716184,33.720615]);
        this.svgDraw.clear();
        //var x = this.pos.x;
        //var y = this.pos.y;
        this.svgDraw.polyline(this.posArray.GpsToCo(this.map)).fill('none').stroke({width:1});
        var rect = this.svgDraw.rect(50, 50).x(pos.x).y(pos.y);
        //rect.click(this.click());
        rect.on('click', this.click());
        //this.layer.on('click', function() {rect.fire('mouseover')});
        //rect.fire('mouseover');
    }

    onRender() { 
        return () => {
            this.draw();    
        }
    }

    click() {
        return () => {
            alert('PolyLine');
        }
    }
}
export default EqLayer;