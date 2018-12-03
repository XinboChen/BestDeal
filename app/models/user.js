var mongoose = require("mongoose");
// a libaray to convert string to hash
// Saving password to DB is very dangerous, so hash and salt it before save
var bcrypt = require("bcrypt");

var UserSchema = new Schema({
    name:{
        type: String
    },
    email:{
        type: String,
        required: true,
        unique: true
   },
    password: {
        type: String,
        required:true
    }//,
    //displayName: String,
    //dealMarked: [String],
    //dealPosted: [String]
});

const User = module.exports = mongoose.model("user", UserSchema);

module.exports

UserSchema.pre("save", function (next){
    var user = this;
    if(this.isModified("password") || this.isNew) {
        bcrypt.genSalt(10, function (err, salt) {
            if(err){
                // callback with error
                return next(err);
            }
            bcrypt.hash(user.password, salt, function(err, hash){
                if(err){
                    return next(err);
                }
                user.password = hash;
                // correct callback
                next();
            });
        });
    }else{
        // callback with nothing/empty
        return next();
    }
});

UserSchema.method.comparePassword = function(password, callback){
    bcrypt.compare(password, this.password, function(err, isMacth){
        if(err){
            return callback(err);
        }else{
            return callback(null, isMacth);
        }
    });
};

