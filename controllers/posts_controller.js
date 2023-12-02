const { model } = require('mongoose');
const Comment = require('../models/comment');
const Post = require('../models/post');
const { post } = require('../routes');

module.exports.postFeed = function(req,res){
    Post.create({content:req.body.content,user: req.user._id}).then(()=>{
        return res.redirect('back');
    }).catch((err)=>{
        if(err){
            console.log('error in creating a post');
            return ;
        }
    })
    
}
module.exports.destroy = function(req,res){
    // console.log(req.params.id);
    
    Post.findByIdAndDelete(req.params.id).then((post)=>{
        console.log(post.user.valueOf());
        console.log(req.user.id);
        if(post.user.valueOf() == req.user.id){
            console.log("its working");
            console.log("its working again");

            Comment.deleteMany({post:req.params.id}).then(()=>{
                return res.redirect('back');
            })
            
        }else{
            return res.redirect('back');
        }
    }).catch((err)=>{
        console.log("Error in deleting the post");
    })
}

