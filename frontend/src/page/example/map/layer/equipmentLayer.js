
export default {
    canvas: '',

        init(map, AMap) {
        this.canvas = document.createElement('canvas');
        this.canvas.width = map.getSize().width;
        this.canvas.height = map.getSize().height;
        this.ctx = this.canvas.getContext('2d');

        this.layer = new AMap.CustomLayer(this.canvas, {
                            zooms: [3,20],
                            zIndex: 12
                        });
        this.layer.setMap(map);
        this.draw = function (){
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.ctx.beginPath();
            this.ctx.arc(this.pos.x, this.pos.y, 50, 0, 2*Math.PI);
            this.ctx.stroke();
        }
        this.layer.render = function onRender() {
                this.pos = map.lngLatToContainer([118.716184,33.720615]);
                this.draw;
            }

        
    }
}