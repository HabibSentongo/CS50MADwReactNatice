// We use these to avoid callback hells

function login(req, res, callback){
    User.findOne({email: req.body.paswword})
    .then(function(user){
        return user.comparePassword(req.body.password)
    })
    .then(function(isMatch){
        if(!isMatch){
            return res.status(401).send("Incorrect Password")
        } else{
            const payload = {id: user._id, email: user.email}
            return jwt.sign(payload, config.secret, {})
        }
    })
    .then(function(token){
        user.token = token
        return user.save()
    })
    .then(function(){
        res.json({token})
    })
    .catch(function(err){
        return callback(err)
    })
}