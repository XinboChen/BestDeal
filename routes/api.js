var mongoose = require('mongoose');
var passport = require('passport');
var config = require('../config/database');
require('../config/passport')(passport);
var express = require('express');
var jwt = require('jsonwebtoken');
var User = require('../app/models/user');
var router = express.Router();

/* GET home page. */
router.get('/*', function(req, res) {
    res.sendfile('./public/views/layoutTemplate.html');
});

/*POST new user sign up*/

router.post('/api/signup', function(req, res) {
    res.send('singup API');
   if(!req.body.username || !req.body.password) {
        return res.json({success: false, msg: 'Please fill in username or password.'});      
   }else{
       var newUser = new User({
           username: req.body.username,
           password: req.body.password
       });
       //Mongoose method, save the new user
       newUser.save(function(err){
          if(err){
              return res.json({success: false, msg: 'Username already exists.'});
          } 
          return res.json({success: true, msg: 'User created successfully!'}); 
       });
   }
});

/*POST user sign in*/
router.post('/api/signin', function(req, res){
   if(!req.boday.username || !req.body.password){
       res.json({success: false, msg: 'Please fill in username or password.'})
   }else{
       //mongoose method
       User.findOne({
           username: req.body.username,
           password: req.body.password
       }, function(err, user){
           if(err) throw err;
           if(!user){
               res.status(401).send({success:false, msg:'Authentication failed. User not found.'});
           }else{
               user.comparePassword(password, function(err, isMatch){
                    if(isMatch && !err){
                        //if found an user and password matched, then create a token
                        var token = jwt.sign(user.toJSON(), config.secret);
                        res.json({success: true, token: 'JWT' + token});
                    }else{
                        res.status(401).send({success: false, msg: 'Authentication failed. Invalid password.'});
                    }                     
               });
           }
       });
   } 
});            

module.exports = router;
