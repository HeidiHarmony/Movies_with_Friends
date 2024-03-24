// Purpose: This file exports all models to be used in the application.

const Calendar = require("./Calendar");
const Comment = require("./Comment");
const DiscussionBoard = require("./DiscussionBoard");
const Forum = require("./Forum");
const Genre = require("./Genre");
// const Mention = require("./Mention");
const Month = require("./Month");
const Movie = require("./Movie");
const Nomination = require("./Nomination");
const Post = require("./Post");
const Rating = require("./Rating");
const User = require("./User");
const Vote = require("./Vote"); 

// Associations

// Calendar Aspect

Calendar.hasMany(Month, {
  foreignKey: 'calendar_id',
  onDelete: 'CASCADE'
});

Month.belongsTo(Calendar, {
  foreignKey: 'calendar_id'
});

Month.hasOne(Genre, {
  foreignKey: 'genre_id',
  onDelete: 'CASCADE'
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
  foreignKey: 'discussion_id'
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

/* Mention.hasMany(User, {
  foreignKey: 'mention_id',
  onDelete: 'CASCADE'
}); */

/* User.belongsTo(Mention, {
  foreignKey: 'mention_id'
});

User.hasMany(Mention, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
}); */

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