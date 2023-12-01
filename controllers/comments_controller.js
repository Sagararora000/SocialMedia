const Comment = require('../models/comment');
const Post = require('../models/post')
module.exports.create = function(req,res){
    // console.log("hello");
    Post.findById(req.body.post).then((post)=>{
        if(post){
            Comment.create({
                content:req.body.content,
                post: req.body.post, //or req.post._id 
                user: req.user._id
                
            }).then((comment)=>{
                //updating the post for the first time in course
                post.comments.push(comment);
                post.save() ;//whenever updating something save it to tell the database this is final
                res.redirect('/');
            }).catch((err)=>{
                console.log("error in creating a comment");
            })
        }
    }).catch((err)=>{
        console.log('error in creating the post');
    })
        
    
}