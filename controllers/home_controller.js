const Post = require("../models/post");
const Comment = require("../models/comment");
const User = require("../models/user");
module.exports.home = function (req, res) {
  //populate the user of each post
  Post.find({})
    .populate("user")
    .populate({
      path: "comments",
      populate: {
        path: "user",
      },
    })
    .then((posts) => {
      // console.log(posts);
      User.find({}).then((user)=>{
        return res.render("home", {
          title: "Facebook | Home",
          posts: posts,
          users: user
        });
      })
      
    })
    .catch((err) => {
      console.log("Error in displaying the post");
    });
};
// module.exports.postFeed = function(req,res){
//    console.log(req.body);
//    return res.redirect("back");
// }
