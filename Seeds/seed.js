/* We need to seed users to test friends view, genres because they are pre-determined, calendar because it is pre-determined, discussion board, forum, and post to view the display and functionality.

We do not need to seed Movies because that data is coming from the Movie of the Night API, or Nominations because they are dependent on the Movies, or the Votes because they are dependent on the Nominations.

We do not need to seed Ratings because they are dependent on the Users, Movies, and Nominations and can be tested/added during development. Same with Comments and Mentions, they are dependent on Users and Posts and can be tested/added during development.
*/

const sequelize = require('../config/connection');
const { User, Genre, Calendar, DiscussionBoard, Forum, Post, Movie } = require('../models');

const userData = require('./userData');
const genreData = require('./genreData');
const calendarData = require('./calendarData');
const discussionBoardData = require('./discussionBoardData');
const forumData = require('./forumData');
const postData = require('./postData');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const genre of genreData) {
    await Genre.create({
      ...genre,
    });
  }

  for (const calendar of calendarData) {
    await Calendar.create({
      ...calendar,
    });
  }

  // Placeholder for seeding movies with reference to genres
  const moviesData = [
    { title: 'Movie 1', genre_id: 1 },
    { title: 'Movie 2', genre_id: 2 },
    { title: 'Movie 2', genre_id: 2 },
    { title: 'Movie 2', genre_id: 2 },
    { title: 'Movie 2', genre_id: 2 },
    { title: 'Movie 2', genre_id: 2 },
    { title: 'Movie 2', genre_id: 2 },
    { title: 'Movie 2', genre_id: 2 },
    { title: 'Movie 2', genre_id: 2 },
    { title: 'Movie 2', genre_id: 2 },

  ];  
  
  for (const movie of moviesData) {
    await Movie.create({ ...movie });
  }

  for (const discussionBoard of discussionBoardData) {
    await DiscussionBoard.create({
      ...discussionBoard,
    });
  }

  for (const forum of forumData) {
    await Forum.create({
      ...forum,
    });
  }
  
  for (const post of postData) {
    await Post.create({
      ...post,
    });
  }
  
  process.exit(0);
};

seedDatabase();