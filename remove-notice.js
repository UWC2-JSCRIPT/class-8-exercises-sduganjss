
const maintNotice = document.getElementById("maintenance-notice");

const hideMaint = function() {
    maintNotice.style.display = "none";
}

let myTimeout = setTimeout (hideMaint, 5000)
