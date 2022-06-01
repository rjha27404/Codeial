module.exports.profile = (req,res)=>{
    // return res.end("<h1>User Controller</h1>");
    return res.render('user_profile',{
        title:"Users",
        name:"Profile"
    })
}
// post contreoller
module.exports.post = (req,res)=>{
    return res.end("<h1>Post Controller</h1>");
}

module.exports.signup = (req,res)=>{
    return res.render('sign-up',{
        title:"Codeial | Sign Up"
    })
}

module.exports.signin = (req,res)=>{
    return res.render('sign-in',{
        title:"Codeial | Sign In"
    })
}
// import User
const User = require('../models/user');
// get the sign up data
module.exports.create = (req,res)=>{
    console.log(req.body);
    if(req.body.password != req.body.confirm_password){
        console.error("Error! Password Doesnt match"); 
        return res.redirect('back');
    }
    User.findOne({email:req.body.email},(err,data)=>{
        if(err) console.log("Error! User is Already Exist");
        if(!data){
            User.create(req.body, (err,data)=>{
                if(err) {
                    console.log("Error Occured"); 
                    return res.end("Error Occured");
                }
                return res.redirect('/users/sign-in');
            })
        }else{
            console.log("Error! User is Already Exist"); 
            return res.redirect('/users/sign-in');
        }
    })


}
// sign in
module.exports.createSession = (req,res)=>{
    
}