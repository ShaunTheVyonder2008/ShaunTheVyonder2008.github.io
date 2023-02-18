const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
if (loginButton) {
  loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "shaun" && password === "admin") {
        alert('You have successfully logged in. \n Returning to Home Page');
        location.href('/');
     } else {
        alert ('Your password is not correct or is not found on the database!');
        location.reload();
     }
  }); 
}
