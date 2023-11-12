const User = require("../models/user");
module.exports.profile = function (req, res) {

    //checking if cookie created or not
    if (req.cookies.user_id) {
      User.findById(req.cookies.user_id, function (err, user) {
        if (user) {
          return res.render("user_profile", {
            title: "User Profile",
            user: user,
          });
        } else {
          return res.redirect("/users/sign-in");
        }
      });
    } else {
      return res.redirect("/users/sign-in");
    }
  };
module.exports.signUp = function(req,res){
    return res.render("user_sign_up",{
        title:"Sign Up"
    })
}

module.exports.signIn = function(req,res){
    return res.render("user_sign_in",{
        title:"Sign In"
    })
}
module.exports.create = function(req,res){
    if(req.body.password != req.body.confirm_password){
        return res.redirect("back");
    }
    User.findOne({email: req.body.email},function(err,user){
        if(err){
            console.log("error in finding user in sign-up");
            return;
        }
        if(!user){
            user.create(req.body, function(err,user){
                if(err){
                    console.log("error in creating user while signing up");
                    return;
                }
                return res.redirect("/users/sign-in");
            });
        }else{
            return res.redirect("back");
        }
    });
}


//sign in and create a session for the user
//Part of Manual Authentication
module.exports.createSession = function(req,res){
    // steps to authenticate
  // find the user
  User.findOne({ email: req.body.email }, function (err, user) {
    if (err) {
      console.log("error in finding user in signing in");
      return;
    }
    // handle user found
    if (user) {
      // handle password which doesn't match
      if (user.password != req.body.password) {
        return res.redirect("back");
      }

      // handle session creation
      res.cookie("user_id", user.id);
      return res.redirect("/users/profile");
    } else {
      // handle user not found
      return res.redirect("back");
    }
  });
};