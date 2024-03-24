const sequelize = require('../config/connection');
const { User, Genre, Calendar, Movie } = require('../models');

const userData = require('./userData');
const genreData = require('./genreData');
const calendarData = require('./calendarData');
const movieData = require('./movieData');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  for (const user of userData) {
    await User.create({
      ...user,
      individualHooks: true,
    });
  }

  for (const genre of genreData) {
    await Genre.create({
      ...genre,
    });
  }

  for (const calendar of calendarData) {
    calendar.date_nom_start = new Date(calendar.date_nom_start);
    calendar.date_nom_end = new Date(calendar.date_nom_end);
    calendar.date_vote_start = new Date(calendar.date_vote_start);
    calendar.date_vote_end = new Date(calendar.date_vote_end);
    calendar.date_discuss_start = new Date(calendar.date_discuss_start);
    calendar.date_discuss_end = new Date(calendar.date_discuss_end);

    await Calendar.create({
      ...calendar,
    });
}
  
  for (const movie of movieData) {
    await Movie.create({ ...movie });
  }

  process.exit(0);
};

seedDatabase();