const Comment = require('../models/comment');
const Post = require('../models/post')
module.exports.commentPost = function(req,res){
    // console.log("hello");
    Comment.create({content:req.body.content,user:req.user._id, post: req.post._id}).then(()=>{
        console.log(post);
        console.log("hello");
        return res.redirect('back');
    }).catch((err)=>{
        if(err){
            console.log('error in creating a comment');
            return ;
        }
    })
}