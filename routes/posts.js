const express = require('express');

const router = express.Router();
const passport = require('passport');

const postsController = require('../controllers/posts_controller');

//Authentication for posts 2nd level check
router.post('/create',passport.checkAuthentication,postsController.postFeed);
// router.get('/',postsController.postDisplay);
router.get('/destroy/:id',passport.checkAuthentication,postsController.destroy);
return module.exports = router;