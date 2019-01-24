angular.module("bestDealApp")
    .factory("authService", function($http, $cookieStore,  $rootScope){
   
    var login = function(username, password, callback) {
        var response = { success: username == "xinbo@gmail.com" && password == "xinboc"};
        
        if(!response.success){
            response.message = "invalid password";
        }
      callback(response);  
    };
    
    return {
        login: login;
    }
});