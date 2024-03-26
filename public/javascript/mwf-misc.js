// Landing page

// Toggle sign in form visibility
const landingShowLogin = document.getElementById("landing-showlogin");
// container holding the form which begins hidden
const signInMember = document.getElementById("signin-member");
const landingSignIn = document.getElementById("landing-signin"); //button to submit the form
const signInForm = document.getElementById("signin-form"); 

//Show the form
landingShowLogin.addEventListener("click", function () {
  console.log("clicked show sign in form button");
signInMember.classList.toggle("visible-form");
  console.log("clicked show signin form button");
});



// Submit the sign in form
landingSignIn.onclick = async function (event) { // Make the function async
  event.preventDefault(); // prevent the default action
  console.log("clicked sign in button");

  const email = document.getElementById('email-login').value.trim();
  const password = document.getElementById('password-login').value.trim();

  if (email && password) {
    console.log("pre-route-grab");
    // Send a POST request to the API endpoint

      const response = await fetch('/userRoutes/signin', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
       

      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/welcome');
      } else {
        alert(response.statusText); // Await the response text
        console.log("error");
      } 
  }
};


// Landing page Sign Up


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


