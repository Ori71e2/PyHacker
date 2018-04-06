<script>
var canvas = document.createElement('canvas');
var x, y = map.lnglatToContainer([118.716184,33.720615]);
canvas.width = map.getSize().width;
canvas.height = map.getSize().height;
var ctx = canvas.getContext('2d');
ctx.beginPath();
ctx.arc(x, y, 50, 0, 2*Math.PI);
ctx.stroke();
var customLayer = new AMap.CustomLayer(canvas, {
            zooms: [3,8],
            zIndex: 12
        });
customLayer.setMap(map);
function onRender() {
    draw();
}
customLayer.render = onRender;

export default {
    mounted() {
        
    },
    methods: {
        init() {

        }
    }
}
</script>