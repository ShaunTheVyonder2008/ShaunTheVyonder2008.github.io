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


// PAgeloader
$(window).load(function () {
    $('.pageloader').fadeOut(300);
});

// cookie banner
/* Javascript to show and hide cookie banner using localstorage */
/* Shows the Cookie banner */
function showCookieBanner(){
    let cookieBanner = document.getElementById("cb-cookie-banner");
    cookieBanner.style.display = "block";
   }
   
   /* Hides the Cookie banner and saves the value to localstorage */
   function hideCookieBanner(){
    localStorage.setItem("cb_isCookieAccepted", "yes");
    let cookieBanner = document.getElementById("cb-cookie-banner");
    cookieBanner.style.display = "none";
   }
   
   /* Checks the localstorage and shows Cookie banner based on it. */
   function initializeCookieBanner(){
    let isCookieAccepted = localStorage.getItem("cb_isCookieAccepted");
    if(isCookieAccepted === null)
    {
     localStorage.setItem("cb_isCookieAccepted", "no");
     showCookieBanner();
    }
    if(isCookieAccepted === "no"){
     showCookieBanner();
    }
}
// Assigning values to window object
window.onload = initializeCookieBanner();
window.cb_hideCookieBanner = hideCookieBanner;



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

// console log
console.log(
    "%cHey!\n%cIf someone told you to paste something here, there's a 200% chance you're being scammed.\n%cThank you for understanding! :)",
    "font-size:39px;",
    "color:red;font-size:25px;",
    "font-size:19px;",
);