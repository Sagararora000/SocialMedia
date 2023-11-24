const Post = require('../models/post');

module.exports.home = function(req,res){
    Post.find({}).populate('user').then(posts=>{
        console.log(posts[0]._id);
        return res.render("home",{
            title: "Facebook | Home",
            posts: posts
        });
    }).catch((err)=>{
        console.log("Error in displaying the post");
    })
    
}
// module.exports.postFeed = function(req,res){
//    console.log(req.body);
//    return res.redirect("back");
// }