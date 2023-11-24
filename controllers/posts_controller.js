const Post = require('../models/post');
const { post } = require('../routes');



module.exports.postFeed = function(req,res){
    // console.log(req.body);
    Post.create({content:req.body.content,user: req.user._id}).then(()=>{

        
        return res.redirect('back');
    }).catch((err)=>{
        if(err){
            console.log('error in creating a post');
            return ;
        }
    })
    
}
