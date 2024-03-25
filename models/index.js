// Purpose: This file exports all models to be used in the application.

const Calendar = require("./Calendar.js");
const Comment = require("./Comment.js");
const DiscussionBoard = require("./DiscussionBoard.js");
const Forum = require("./Forum.js");
const Genre = require("./Genre.js");
// const Mention = require("./Mention.js");
const Month = require("./Month.js");
const Movie = require("./Movie.js");
const Nomination = require("./Nomination.js");
const Post = require("./Post.js");
const Rating = require("./Rating.js");
const User = require("./User.js");
const Vote = require("./Vote.js"); 

// Associations

// Calendar Aspect

Calendar.hasMany(Month, {
  foreignKey: 'month_id',
  onDelete: 'CASCADE'
});

Month.belongsTo(Calendar, {
  foreignKey: 'month_id'
});

Genre.belongsTo(Month, {
  foreignKey: 'genre_id'
});

Month.hasOne(Movie, {
  foreignKey: 'movie_id',
  onDelete: 'CASCADE'
});

Movie.belongsTo(Month, {
  foreignKey: 'movie_id'
});

Month.hasOne(DiscussionBoard, {
  foreignKey: 'discussion_id',
  onDelete: 'CASCADE'
});

DiscussionBoard.belongsTo(Month, {
  foreignKey: 'month_id'
});

// Discussion and Rating Aspect

User.hasMany(Rating, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Rating.belongsTo(User, {
  foreignKey: 'user_id'
});

Movie.hasMany(Rating, {
  foreignKey: 'movie_id',
  onDelete: 'CASCADE'
});

Rating.belongsTo(Movie, {
  foreignKey: 'movie_id'
});

DiscussionBoard.hasMany(Forum, {
  foreignKey: 'discussion_id',
  onDelete: 'CASCADE'
});

Forum.belongsTo(DiscussionBoard, {
  foreignKey: 'discussion_id'
});

Forum.hasMany(Post, {
  foreignKey: 'forum_id',
  onDelete: 'CASCADE'
});

Post.belongsTo(Forum, {
  foreignKey: 'forum_id'
});

Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE'
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id'
});

Post.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Comment.belongsTo(User, { 
  foreignKey: 'user_id'
});

// Nomination and Voting Aspect

User.hasMany(Nomination, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Nomination.belongsTo(User, {
  foreignKey: 'user_id'
});

Movie.hasMany(Nomination, {
  foreignKey: 'movie_id',
  onDelete: 'CASCADE'
});

Nomination.belongsTo(Movie, {
  foreignKey: 'movie_id'
});

User.hasMany(Vote, {  
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Vote.belongsTo(User, {
  foreignKey: 'user_id'
});

Nomination.hasMany(Vote, {
  foreignKey: 'nomination_id',
  onDelete: 'CASCADE'
});

Vote.belongsTo(Nomination, {
  foreignKey: 'nomination_id'
});


// Export models

module.exports = {
  Calendar,
  Comment,
  DiscussionBoard,
  Forum,
  Genre,
 // Mention,
  Month,
  Movie,
  Nomination,
  Post,
  Rating,
  User,
  Vote,
};