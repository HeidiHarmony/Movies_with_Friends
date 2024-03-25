// Landing page

// Toggle sign in form visibility
const landingShowLogin = document.getElementById("landing-showlogin");
// container holding the form which begins hidden
const signInMember = document.getElementById("signin-member");

landingShowLogin.addEventListener("click", function () {
signInMember.classList.toggle("visible-form");
  console.log("clicked show signin form button");
});

// submit the sign in form
const landingSignIn = document.getElementById("landing-signin");
landingSignIn.onclick = function () {
  window.location.href = "/welcome";
  console.log("clicked sign in button");
};

// Landing page Sign Up

const showSignUp = document.getElementById("show-signup");
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
submitSignUp.onclick = function () {
  window.location.href = "/welcome";
  console.log("clicked sign up button");
};