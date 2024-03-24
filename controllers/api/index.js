const router = require('express').Router();
const userRoutes = require('./userRoutes');
const movieRoutes = require('./movieRoutes');
const genreRoutes = require('./genreRoutes');
const calendarRoutes = require('./calendarRoutes');
const nominationRoutes = require('./nominationRoutes');
const ratingRoutes = require('./ratingRoutes');
const discussionsRoutes = require('./discussionsRoutes'); // Import discussionRoutes

router.use('/movies', movieRoutes);
router.use('/genre', genreRoutes);
router.use('/calendar', calendarRoutes);
router.use('/nomination', nominationRoutes);
router.use('/rating', ratingRoutes);
router.use('/users', userRoutes);
router.use('/discussion', discussionsRoutes);


module.exports = router;