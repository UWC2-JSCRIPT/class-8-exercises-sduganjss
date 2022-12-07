
const bodyEl = document.body;
let rgbNum = 0;
let maxRGB = 255;

const animate = function() {
rgbNum++;
if (rgbNum < maxRGB) {

const rgbColor = `rgb(${rgbNum}, ${rgbNum}, ${rgbNum})`;

bodyEl.style.backgroundColor = rgbColor;

requestAnimationFrame(animate);
}
}
requestAnimationFrame(animate);