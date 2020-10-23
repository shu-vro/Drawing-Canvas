const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let drawMethod = {
    strokeStyle: 'black',
    lineWidth: 5,
}

let painting = false;

function start(e) {
    painting = true;
    draw(e);
}

function finish() {
    painting = false;
    ctx.beginPath();
}

function draw(e) {
    if (!painting) {
        return
    }
    ctx.lineWidth = drawMethod.lineWidth;
    ctx.lineCap = 'round';
    ctx.strokeStyle = drawMethod.strokeStyle;
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);
}

window.addEventListener('mousedown', start);
window.addEventListener('mouseup', finish);
window.addEventListener('mousemove', draw);
