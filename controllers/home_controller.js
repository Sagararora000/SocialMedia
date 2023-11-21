const Post = require('../models/post');

module.exports.home = function(req,res){
    return res.render("home",{
        postDisplay: req.body.content
    });
}
// module.exports.postFeed = function(req,res){
//    console.log(req.body);
//    return res.redirect("back");
// }