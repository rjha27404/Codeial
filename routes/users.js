const express = require("express");
// router module
const router = express.Router();

const usersController = require("../controllers/users_controller");

// router.get('/routeName', require('./routerFIle'))
// profile router
router.get('/profile', usersController.profile);
// post controller
router.get('/post', usersController.post);
// signup route
router.get('/sign-up', usersController.signup);
// signin route
router.get('sign-in', usersController.signin);
// create
router.post('/create',(req,res)=>{
    
})
// export router to available for use
module.exports = router;