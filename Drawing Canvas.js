const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let painting = false;

function start() {
    painting = true;
}

function finish() {
    painting = false;
    ctx.beginPath();
}

function draw(e) {
    if (!painting) {
        return
    }
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);
}

window.addEventListener('mousedown', start);
window.addEventListener('mouseup', finish);
window.addEventListener('mousemove', draw);