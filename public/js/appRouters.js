angular.module('appRouters',[]).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    
    $routeProvider
        .when('/', {
            templateUrl: 'views/home/home.html',
            controller: 'HomeController'
        })
        .when('/about',{
            templateUrl: 'views/home/about.html',
            controller: 'AboutController'
        })
//        .when('/signin',{
//            templateUrl: 'views/home/about.html',
//            controller: 'SignupController'
//        })
        .when('/signup',{
            templateUrl: 'views/login/register.html',
            controller: 'SignupController'
        });
    
    $locationProvider.html5Mode(true);
}]);