// console log
console.log(
    "%cHey!\n%cIf someone told you to paste something here, there's a 200% chance you're being scammed.\n%cThank you for understanding! :)",
    "font-size:39px;",
    "color:red;font-size:25px;",
    "font-size:19px;",
);

// Set theme to the user's preferred color scheme
function updateTheme() {
    const colorMode = window.matchMedia("(prefers-color-scheme: dark)").matches ?
      "dark" :
      "light";
    document.querySelector("html").setAttribute("data-bs-theme", colorMode);
}

// Set theme on load
updateTheme()

// Update theme when the preferred scheme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateTheme)