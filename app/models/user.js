var mongoose = require( 'mongoose' );
var bcrypt = require('bcrypt-nodejs');
var jwt = require('jsonwebtoken');

var userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

userSchema.pre('save', function(next){
    var user = this;
    if(this.isModified('password') || this.isNew){
        bcrypt.genSalt(10, function (err, salt){
            if(err){
                return next(err);
            }
            bcrypt.hash(user.password, salt, null, function(err, hash){
                if(err){
                    return next(err);
                }
                user.password = hash;
                next();
            });
        });
    }else{
        return next();
    }
});


userSchema.methods.comparePassword = function(password, cb) {
  bcrypt.compare(password, this.password, function(err, isMatch){
     if(err){
         return cb(err);
     }else{
         cb(null, isMatch);
     }  
  });
};

mongoose.model('User', userSchema);