const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const withAuth = require('./utilities/auth');
const helpers = require('./utilities/helpers');

const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3000;

const hbs = exphbs.create({ helpers });
const sess = {
  secret: process.env.SESSION_SECRET,
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

const Calendar = require("./models/Calendar");
const Comment = require("./models/Comment");
const DiscussionBoard = require("./models/DiscussionBoard");
const Forum = require("./models/Forum");
const Genre = require("./models/Genre");
// const Mention = require("./models/Mention");
const Month = require("./models/Month");
const Movie = require("./models/Movie");
const Nomination = require("./models/Nomination");
const Post = require("./models/Post");
const User = require("./models/User");
const Vote = require("./models/Vote");
const { Rating } = require('./models');

app.use(session(sess));

// Inform Express.js on which template engine to use
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// app.use(withAuth);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

// Connect to the database before starting the Express.js server
sequelize.sync({ force: true }).then(() => {
  User.sync().then(() => {
    Calendar.sync().then(() => {
      Month.sync().then(() => {
        Genre.sync().then(() => {
          Movie.sync().then(() => {
            Nomination.sync().then(() => {
              Vote.sync().then(() => {
                Rating.sync().then(() => {
                  DiscussionBoard.sync().then(() => {
                    Forum.sync().then(() => {
                      Post.sync().then(() => {
                        Comment.sync().then(() => {
                          console.log("All models are synchronized");
                          app.listen(PORT, () => console.log('Now listening on port ' + PORT));
                      }).catch((err) => {
                        console.log("Error syncing models:", err);
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});


