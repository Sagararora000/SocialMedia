const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller');

router.get('/',homeController.home);
// This is use middle ware for further routes
router.use('/posts',require('./posts'));
router.use('/users',require('./users'));
router.use('/comments',require('./comments'));
return module.exports = router;
 