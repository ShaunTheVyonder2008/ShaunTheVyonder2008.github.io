// Console log
// In javascript!

console.log('----------------');
console.log('| ttnrtsite.me |');
console.log('| (C) TTNT CRP |');
console.log('| 2018 - 2023  |');
console.log('----------------');


// Canvas for image loading!
window.onload = function() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var img = document.getElementById("logo");
    ctx.drawImage(img, 0, -40);
}

// End of line