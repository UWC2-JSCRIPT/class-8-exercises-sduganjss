
const bodyEl = document.body;
let rgbNum = 255;
let secondsRemaining = 255;

let countdownInterval = setInterval(function() {
    if (secondsRemaining > 0) {
        secondsRemaining--;
        rgbNum--;
    bodyEl.style.backgroundColor = `rgb(${rgbNum}, ${rgbNum}, ${rgbNum})`
    } else {
        clearInterval(countdownInterval);
    }
}, 500)

