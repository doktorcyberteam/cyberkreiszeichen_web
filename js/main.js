let angle = 0;
const speed = 100;

function advance() {
    angle = (angle + 1) % 360;
    document.getElementById("bg").style.filter = `hue-rotate(${angle}deg)`;
    setTimeout(advance, speed)
};

window.onload = () => {
    setTimeout(advance, speed);
};