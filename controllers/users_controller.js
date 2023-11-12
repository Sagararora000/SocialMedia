module.exports.users = function(req,res){
    return res.render("user_profile",{
        title:"Basic users page"
    });
}
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
    //Steps to authenticate 
    //find the user

    //handle password which don't match

    //handle session creation

    //handle user not found
}