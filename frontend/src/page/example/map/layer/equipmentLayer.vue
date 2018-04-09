<script>
//var canvas, layer, ctx, pos;
export default {
    data() { 
        return {
            canvas: '',
            layer:  '',
            ctx: '',
            pos: ''
        
        }
    },
    methods: {
        init(map) {
            this.canvas = document.createElement('canvas');
            this.canvas.width = map.getSize().width;
            this.canvas.height = map.getSize().height;
            this.layer = new AMap.CustomLayer(canvas, {
                            zooms: [3,20],
                            zIndex: 12
                        });
            this.layer.setMap(map);
            this.layer.render = this.onRender;
            this.ctx = canvas.getContext('2d');

        },
        onRender() {
            this.pos = map.lngLatToContainer([118.716184,33.720615]);
            this.draw();
        },
        draw() {
            this.ctx.clearRect(0, 0, canvas.width, canvas.height);
            this.ctx.beginPath();
            this.ctx.arc(this.pos.x, this.pos.y, 50, 0, 2*Math.PI);
            this.ctx.stroke();
        }
    }
}
</script>