const Post = require('../models/post');
const Comment = require('../models/comment');

module.exports.home = function(req,res){
    //populate the user of each post
    Post.find({}).populate('user').then(posts=>{
        // console.log(posts);
        return res.render("home",{
            title: "Facebook | Home",
            posts: posts,
        });
        
    }).catch((err)=>{
        console.log("Error in displaying the post");
    })

    
}
// module.exports.postFeed = function(req,res){
//    console.log(req.body);
//    return res.redirect("back");
// }