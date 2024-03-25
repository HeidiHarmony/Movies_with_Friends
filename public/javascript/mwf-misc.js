// Landing page Sign In

// button to toggle the sign in form visibility
const landingShowLogin = document.getElementById("landing-showlogin");
// container holding the form which begins hidden
const signInMember = document.getElementById("signin-member");

landingShowLogin.addEventListener("click", function () {
signInMember.classList.toggle("visible-form");
  console.log("clicked show signin form button");
});

// Sign in and go to welcome

// button to submit the sign in form
const landingSignIn = document.getElementById("landing-signin");

landingSignIn.onclick = function () {
  window.location.href = "/signin";
  console.log("clicked sign in button");
};

// Landing page Sign Up

const showSignUpForm = document.getElementById("landing-showsignup");
const signUpNewUser = document.getElementById("signup-newuser");
const submitSignUp = document.getElementById("submit-signup");


showSignUpForm.addEventListener("click", function () {
  console.log("clicked show sign up form button");
signUpNewUser.classList.toggle("visible-form");
  console.log("sign up form is now visible");
});

// Toggle form visibility

function toggleForm(signInMember, signUpNewUser) {
  if (signInMember.classList.contains("visible-form") && signUpNewUser.classList.contains("visible-form")) {
    signInMember.classList.remove("visible-form");
  } else {
    signInMember.classList.toggle("visible-form");
    signUpNewUser.classList.toggle("visible-form");
  }
}

// Code to confirm password match

//prevent user from selecting more than 5 movies to nominate

window.onload = function () {
  let checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", function () {
      let checkedCount = Array.from(checkboxes).filter((i) => i.checked).length;
      if (checkedCount > 5) {
        this.checked = false;
        alert("You can only select 5 movies.");
      }
    });
  });
};
