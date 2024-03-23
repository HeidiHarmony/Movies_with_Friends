const Router = require("express").Router();
const { where } = require("sequelize");
const { Rating } = require("../../models");


Router.get("/:movieId", async (req, res) => {
  try {
    const ratingData = await Rating.findAll({
      where: {
        movieId: req.params.movieId
      }
    });
    res.status(200).json(ratingData);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});''

// Add a user's rating
app.post('/update-rating/:userId', async (req, res) => {
  try {
    const userId = req.params.user_id;
    const rating = await Rating.findOne({ where: { user_id: userId } });
    const averageRating =
      (rating.rating_originality +
        rating.rating_entertainment +
        rating.rating_cinematography +
        rating.rating_acting +
        rating.rating_storytelling) /
      5;
    rating.user_average_rating = averageRating;
    await rating.save();
    res.json({ message: 'Rating updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while updating the rating' });
  }
});


module.exports = Router;
