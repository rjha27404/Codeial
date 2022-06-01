const express = require("express");
// router module
const router = express.Router();

const homeController = require("../controllers/home_controller");
console.log("Router Loaded In Main FIle");

router.get('/',homeController.home);
router.get("/about", homeController.about);

module.exports = router;