const Post = require('../models/post');
const Comment = require('../models/comment');

module.exports.home = function(req,res){
    Post.find({}).populate('user').then(posts=>{
        // console.log(posts);
        Comment.find({}).populate('post').then(comments=>{
            // console.log(comments);
            return res.render("home",{
                title: "Facebook | Home",
                posts: posts,
                comments:comments
            });
        }).catch((err)=>{
        console.log("Error in displaying the comments");

        })
        // console.log(posts[0]._id);
        //     return res.render("home",{
        //         title: "Facebook | Home",
        //         posts: posts
        //     });
        
    }).catch((err)=>{
        console.log("Error in displaying the post");
    })

    
}
// module.exports.postFeed = function(req,res){
//    console.log(req.body);
//    return res.redirect("back");
// }