const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utilities/helpers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3000;

// Create Handlebars engine with custom helpers
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
    db: sequelize,
  }),
};

app.use(session(sess));

// Set view engine to Handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// Register Handlebars helpers individually
Object.entries(helpers).forEach(([key, value]) => {
  hbs.handlebars.registerHelper(key, value);
});

// Route for the landing page
app.get('/', (req, res) => {
  res.render('landing', { layout: 'landing-layout' });
});

// Parse incoming requests with JSON payloads
app.use(express.json());

// Parse incoming requests with URL-encoded payloads
app.use(express.urlencoded({ extended: true }));

// Use routes defined in controllers
app.use(routes);

// Sync Sequelize models and start server
sequelize.sync({ force: true })
  .then(() => {
    console.log('All models are synchronized');
    app.listen(PORT, () => console.log('Now listening on port ' + PORT));
  })
  .catch((err) => {
    console.log('Error syncing models:', err);
  });
