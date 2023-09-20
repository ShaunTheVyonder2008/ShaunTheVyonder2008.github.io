// Return to top

$(window).scroll(function () {
    if ($(this).scrollTop() > 400) {
        $('#return-to-top').fadeIn();
    } else {
        $('#return-to-top').fadeOut();
    }
});

$('#return-to-top').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 500);
});

// Tools for eyes

function center() {
    let myDiv = document.getElementById("main");
    if (myDiv.style.textAlign === "center") {
        document.getElementById("main").style.textAlign = "left";
    } else {
        document.getElementById("main").style.textAlign = "center";
    }
}

var fontSize = 1;
function zoomIn() {
    fontSize += 0.1;
    // document.body.style.fontSize = fontSize + "em";
    document.getElementById("main").style.fontSize = fontSize + "em";
}
function zoomOut() {
    fontSize -= 0.1;
    document.getElementById("main").style.fontSize = fontSize + "em";
}

// source
// https://www.w3schools.com/jsref/prop_style_fontsize.asp
// https://www.viralpatel.net/implement-simple-font-zoomer-in-javascript-html/
// https://www.udacity.com/blog/2021/06/javascript-css.html


// PAgeloader
$(window).load(function () {
    $('.pageloader').fadeOut(300);
});
