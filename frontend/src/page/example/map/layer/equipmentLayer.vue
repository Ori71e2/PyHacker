<script>
var canvas, layer, ctx, pos
export default {

    init(map) {
        canvas = document.createElement('canvas');
        canvas.width = map.getSize().width;
        canvas.height = map.getSize().height;
        customLayer = new AMap.CustomLayer(canvas, {
                        zooms: [3,20],
                        zIndex: 12
                    });
        customLayer.setMap(map);
        customLayer.render = onRender;
        ctx = canvas.getContext('2d');

    },
    onRender() {
        pos = map.lngLatToContainer([118.716184,33.720615]);
        draw();
    },
    draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, 50, 0, 2*Math.PI);
        ctx.stroke();
    }
}
</script>