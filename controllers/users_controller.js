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