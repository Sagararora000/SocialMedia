module.exports.users = function(req,res){
    return res.render("user_profile",{
        title:"Basic users page"
    });
}
module.exports.hello = function(req,res){
    return res.end("<h1>Hi this is res.end</h1>");
}