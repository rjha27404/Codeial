module.exports.home = function(req,res){
    // return res.end("<h1>Express is Up For Codeial</h1>");
    console.log(res.cookies);
    res.cookie('user',25)
    return res.render('home',{
        title:"Home"
    })
}

