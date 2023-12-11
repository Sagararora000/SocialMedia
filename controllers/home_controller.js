const Post = require("../models/post");
const Comment = require("../models/comment");
const User = require("../models/user");
module.exports.home = async function (req, res) {
  //populate the user of each post
  try{
    let posts = await Post.find({})
    .populate("user")
    .populate({
      path: "comments",
      populate: {
        path: "user",
      },
    });
    let user = await User.find({});
    return res.render("home", {
      title: "Facebook | Home",
      posts: posts,
      users: user
    });
  }catch(err){
    console.log("Error in displaying posts:",err);
    return;
  }
  
    
};
// module.exports.postFeed = function(req,res){
//    console.log(req.body);
//    return res.redirect("back");
// }
