var app = angular.module("bestDealApp", ["ngRoute"]);

app.config(function($routeProvider){
   $routeProvider
    .when("/home",{
       templateUrl:"index.html"
   })
    .when('/login',{
       templateUrl:"app/views/login.html",
       controller:"loginController"
   })
    .when('/register',{
       templateUrl:"app/views/login.html",
       controller:"loginController"
   })
    .when('/logout',{
       templateUrl:"app/views/login.html",
       controller:"logoutController"
   })
    .otherwise({
       redirectTo: "/home"
   })
});
