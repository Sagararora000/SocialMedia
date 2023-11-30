const express = require('express');

const router = express.Router();
const passport = require('passport');

const postsController = require('../controllers/posts_controller');

//Authentication for posts 2nd level check
router.post('/',passport.checkAuthentication,postsController.postFeed);
// router.get('/',postsController.postDisplay);
return module.exports = router;