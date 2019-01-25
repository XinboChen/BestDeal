angular.module('SignupCtrl', [])
.controller('SignupController',function() {
    return{
        restruct: 'E',
        controller:function($scope){
            
            var signup = this;
            var message = "";
            
            signup.credentials = {
                username: "",
                password: ""
            };
             
            signup.register = function(){
                console.log("Submitting registration");
                console.log(signup.credentials.username); 
//                authentication
//                    .register(signup.credentials)
//                    .error(function(err){
//                    alert(err);
//                    })
//                    .then(function(){
//                    $location.path('profile');      
//                });
            };
        }
        
    };  
});