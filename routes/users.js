const express = require("express");
// router module
const router = express.Router();

const usersController = require("../controllers/users_controller");

// router.get('/routeName', require('./routerFIle'))
// profile router
router.get('/profile', usersController.profile);
// post controller
router.get('/post', usersController.post);
// export router to available for use
module.exports = router;