// Landing page
document.addEventListener("DOMContentLoaded", function() {

// Toggle sign in form visibility
const landingShowLogin = document.getElementById("landing-showlogin");
// container holding the form which begins hidden
const signInMember = document.getElementById("signin-member");
const landingSignIn = document.getElementById("landing-signin");
const signInForm = document.getElementById("signin-form"); 

landingShowLogin.addEventListener("click", function () {
signInMember.classList.toggle("visible-form");
  console.log("clicked show signin form button");
});


landingSignIn.onclick = function (event) {
  event.preventDefault(); // prevent the default action
  signInForm.submit(); // submit the form
  window.location.href = "/welcome";
  console.log("clicked sign in button");
};

});

// submit the sign in form
/* const landingSignIn = document.getElementById("landing-signin");
landingSignIn.onclick = function () {
  window.location.href = "/welcome";
  console.log("clicked sign in button");
}; */



// Landing page Sign Up
document.addEventListener("DOMContentLoaded", function() {

const showSignUp = document.getElementById("landing-showsignup");
const signUpContainer = document.getElementById("signup-container");
const signUpForm = document.getElementById("signup-form");
const submitSignUp = document.getElementById("submit-signup");

// Toggle sign up form visibility
showSignUp.addEventListener("click", function () {
  console.log("clicked show sign up form button");
signUpContainer.classList.toggle("visible-form");
  console.log("sign up form is now visible");
});

// submit the sign up form
submitSignUp.onclick = function (event) {
  event.preventDefault(); // prevent the default action
  signUpForm.submit(); // submit the form
  window.location.href = "/welcome";
  console.log("clicked sign up button");
};
});

