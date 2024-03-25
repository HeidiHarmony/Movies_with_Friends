const router = require("express").Router();
const { User, Movie } = require('../models');
// const withAuth = require("../utilities/auth");


// route for the landing page
router.get('/', async (req, res) => {
  res.render('landing', { layout: 'landing-layout' }); // Specify the 'landing' layout and landing view 
});


// route for the welcome page for signed-in users
router.get("/welcome", async (req, res) => {
  try {
    // Retrieve the user data based on the user_id stored in the session
    console.log(req.session.user_id);
    const userData = await User.findByPk(req.session.user_id);
    
console.log(userData);
    // Retrieve all movie data
    const movieData = await Movie.findAll();

    // Render the welcome page and pass the user and movie data to it
    res.render("welcome", { layout: "main", userData, movieData });
  } catch (err) {
    // Handle errors if any occur during the process
    console.error(err);
    res.status(500).json(err);
  }
});

// route for the user's profile page
router.get("/profile", async (req, res) => {
  try {
    await User.findbyPk(req.session.user_id, {});
    res.render("profile", { layout: "main" });
  } catch (err) {
    res.status(500).json(err);
  }
});

// route to list all registered users
router.get("/friends", async (req, res) => {
  try {
    await User.findAll({});
    res.render("friends", { layout: "main" });
  } catch (err) {
    res.status(500).json(err);
  }
});

// route to render the about view
router.get("/about", async (req, res) => {
  try {
    res.render("about", { layout: "main" });
  } catch (err) {
    res.status(500).json(err);
  }
});

// route to render the contact view
router.get("/contact", async (req, res) => {
  try {
    res.render("contact", { layout: "main" });
  } catch (err) {
    res.status(500).json(err);
  }
});







router.get("/discussion", async (req, res) => {
  try {
    const movieData = await Movie.findAll({});

    const movies = movieData.map((movie) => movie.get({ plain: true }));

    res.render("discussion", {
      movies,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get("/profile", async (req, res) => {
  try {
    const movieData = await Movie.findAll({});

    const movies = movieData.map((movie) => movie.get({ plain: true }));

    res.render("profile", {
      movies,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/landing", async (req, res) => {
  try {
    const movieData = await Movie.findAll({});

    const movies = movieData.map((movie) => movie.get({ plain: true }));

    res.render("landing", {
      movies,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/friends", async (req, res) => {
  try {
    const movieData = await Movie.findAll({});

    const movies = movieData.map((movie) => movie.get({ plain: true }));

    res.render("friends", {
      movies,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/signup", async (req, res) => {
  try {
    const movieData = await Movie.findAll({});

    const movies = movieData.map((movie) => movie.get({ plain: true }));

    res.render("signup", {
      movies,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/welcome");
    return;
  }

  res.render("landing");
});
module.exports = router;

// const express = require('express');
// const app = express();

// // Import the router
// const router = require('./router');

// // Mount the router at the root path
// app.use('/', router);

// // Start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
