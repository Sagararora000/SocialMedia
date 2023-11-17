const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller');

router.get('/',homeController.home);
// This is use middle ware for further routes
router.use('/users',require('./users'));

return module.exports = router;
 