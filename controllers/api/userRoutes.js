const router = require("express").Router();
const User = require('../../models');

// ROUTES FOR USER AUTHENTICATION AND VIEW REDIRECTION, TAKING PLACE ON THE LANDING PAGE (landing-layout.handlebars)

// ROUTE: Create a new user. They will be automatically logged in and redirected to the welcome page
router.post('/signup', async (req, res) => {
  try {
    // Create a new user
    await User.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password,
      user_name: req.body.user_name,
      state: req.body.state,
      favorite_genres: req.body.favorite_genres,
      favorite_movies: req.body.favorite_movies,
      about_me: req.body.about_me,
      user_avatar: req.body.user_avatar,
    });

    console.log('User created successfully');

    req.session.user_id = User.id;
    req.session.logged_in = true;

    const userDisplayData = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      user_name: req.body.user_name,
      state: req.body.state,
      favorite_genres: req.body.favorite_genres,
      favorite_movies: req.body.favorite_movies,
      about_me: req.body.about_me,
      user_avatar: req.body.user_avatar
    };

    // Store user display data in session for later use
    req.session.userDisplayData = userDisplayData;
    console.log('User display data stored in session');


    // Redirect user to the welcome page
    res.redirect('/welcome');
    console.log('User redirected to welcome page');
  } catch (err) {
    console.error(err);
    res.status(400).json(err);
  }
});


// ROUTE: Sign in the user with the email and password
router.post('/signin', async (req, res) => {
  try {
    // Check if the user exists and the password is correct
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
      .status(400)
      .json({ message: 'Invalid email or password' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
      .status(400)
      .json({ message: 'Invalid email or password' });
      return;
    }

     // Store user ID in session for later use
  req.session.save(() => {
    req.session.user_id = userData.id;
     req.session.logged_in = true;

     res.json({ user: userData, message: 'You are now logged in!' });
  });

  } catch (err) {
    res.status(400).json(err);
  }
});




// Log out the user

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      // Redirect the user to the login page after logging out
      res.redirect('/');
    });
  } else {
    // If the user is not logged in, respond with a 404 status
    res.status(404).end();
  }
});

module.exports = router; 


// Display user's info
/* 
router.get('/me', async (req, res) => {
  try {
    if (!req.session.logged_in) {
      res.status(401).json({ message: 'You are not logged in' });
      return;
    }
    const user = await User.findByPk(req.session.user_id);
    res.render('profile', { user }); // Render 'profile' view
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving user data');
  }
});

// Get user's friends's info

router.get('/friends', async (req, res) => {
  try {
    const friends = await User.findAll({
      where: {
        id: {
          [Op.ne]: req.session.user_id // Exclude the current user
        }
      }
    });
    res.render('friends', { friends }); // Render 'friends' view
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving user data');
  }
});

// Get user's nominated movies

router.get('/my-noms', async (req, res) => {
  try {
  const mynoms = await User.findByPk(req.session.user_id, {
  include: [{ model: Nomination }, { model: Movie }]
});
    res.render('mynoms', { mynoms }); // Render 'my nominations' view
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving user\'s nominations');
  }
});

// Get user's voting history

router.get('/my-votes', async (req, res) => {
  try {
    const myvotes = await User.findByPk(req.session.user_id, {
      include: [{ model: Vote }, { model: Movie }]
    });
    res.render('myvotes', { myvotes }); // Render 'my votes' view
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving user\'s voting history');
  }
}); */

