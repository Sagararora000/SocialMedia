const User = require('../models/user');
module.exports.profile = function(req,res){
    User.findById(req.params.id).then((user)=>{
        return res.render("user_profile",{
            title:"Basic users page",
            user_profile:user
        });
    })
    
}
module.exports.update = function(req,res){
    if(req.user.id == req.params.id){
        User.findByIdAndUpdate(req.params.id,req.body).then((user)=>{
            return res.redirect('/');
        })
    }else{
        return res.status(401).send('Unauthorized');
    }
    
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
    User.findOne({email: req.body.email}).then(user =>{
        if(!user){
            User.create(req.body).then(()=>{
                res.redirect("/users/sign-in");
            }).catch((err)=>{
                console.log("error in creating user while signing up");
                return;
            })
        }else{
            return res.redirect("back");
        }
    }).catch(err => console.log("error in finding user in sign-up"));
    
}
//sign in and create a session for the user
//Part of Manual Authentication
module.exports.createSession = function(req,res){
    return res.redirect('/');
}

module.exports.destroySession = function(req,res){
    req.logout((err)=>{
        if(err){
            console.log(err);
        }
        else{
            res.redirect('/');
        }
    });
    
}