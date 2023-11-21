const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller');

router.use('/',homeController.home);
// This is use middle ware for further routes
router.use('/postFeed',require('./posts'));
router.use('/users',require('./users'));

return module.exports = router;
 