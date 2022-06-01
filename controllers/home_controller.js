module.exports.home = function(req,res){
    return res.end("<h1>Express is Up For Codeial</h1>")
}

module.exports.about = (req,res)=>{
    return res.end("About Us");
}