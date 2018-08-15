var app = angular.module("bestDealApp", ["ngRoute"]);

app.config(function($routeProvider){
   $routeProvider
    .when("/home",{
       templateUrl:"index.html"
   })
    .when('/login',{
       controller:"loginController",
       templateUrl:"app/views/login.html"
   })
    .when('/register',{
       controller:"loginController",
       templateUrl:"app/views/login.html"
   })
    .when('/logout',{
       controller:"logoutController",
       templateUrl:"app/views/login.html"
   })
    .otherwise({
       redirectTo: "/home"
   })
});
