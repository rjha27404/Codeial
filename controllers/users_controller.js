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
// get the sign up data
module.exports.create = (req,res)=>{
    return res.render('sign-up',{
        title:"Codeial | Sign In"
    })
}
// sign in
module.exports.createSession = (req,res)=>{
    return res.render('sign-in',{
        title:"Codeial | Sign In"
    })
}