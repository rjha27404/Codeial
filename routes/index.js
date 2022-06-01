const express = require("express");
// router module
const router = express.Router();

const homeController = require("../controllers/home_controller");
const usersController = require("../controllers/users_controller");
console.log("Router Loaded In Main FIle");

router.get('/',homeController.home);
// all /users/ routes will be taken care
router.use('/users',require('./users'));
module.exports = router;