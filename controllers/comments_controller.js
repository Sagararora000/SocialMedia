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
module.exports.destroy = function(req,res){
    console.log(req.params);
    // Post.findById(req.params.postid).then((post)=>{
    //     //here req.body has no content as it is not a post request , it is a get request
    //     console.log("hello post found" + req.body.post);
    //     if(post){
    //         Comment.findByIdAndDelete(req.params.commentid).then((comment)=>{
    //             if(comment.user.valueOf() == req.user.id){
    //                     return res.redirect('back');
    //             }else{
    //                 return res.redirect('back');
    //             }
    //         }).catch((err)=>{
    //             console.log("error in deleting a comment");
    //         })
    //     }
    // }).catch((err)=>{
    //     console.log("error in finding a post");
    // })
    Comment.findByIdAndDelete(req.params.commentid).then((comment)=>{
        if(comment.user.valueOf() == req.user.id){
            let postId = comment.post;
            Post.findByIdAndUpdate(postId,{$pull:{comments:req.params.commentid}}).then((post)=>{
                return res.redirect('back');
            })
        }else{
            return res.redirect('back');
        }
    })
}