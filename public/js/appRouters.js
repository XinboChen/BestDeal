angular.module('appRouters',[]).config(['$routeProvider', '$location', function($routeProvider, $locationProvider){
    
    $routeProvider
        .when('/', {
            templateUrl: 'views/home/home.html',
            controller: 'HomeController'
        })
        .when('/about',{
            templateUrl: 'views/home/about.html',
            controller: 'AboutController'
        });
    
    $locationProvider.html5Mode(true);
}]);