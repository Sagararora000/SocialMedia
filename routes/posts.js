const express = require('express');

const router = express.Router();
const postsController = require('../controllers/posts_controller');

router.post('/',postsController.postFeed);
// router.get('/',postsController.postDisplay);
return module.exports = router;