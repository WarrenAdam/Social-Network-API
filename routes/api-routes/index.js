const router = require('express').Router();

// Import routes
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');

// endpoints made for user and thoughts
router.use('/user',userRoutes);
router.use('/thought',thoughtRoutes);
module.exports = router;