angular.module('SignupCtrl', [])
.controller('SignupController',
            ['$scope', '$location', '$http', 'Authentication', function($scope, $location, $http,
            Authentication){
                
                
                $scope.authentication = Authentication;
                
                // if user is signed in, then redirect back to home
                if($scope.authentication.user){
                    $location.path('/');
                }

                $scope.register = function(){
                    $http.post('/api/signup', $scope.credentials).then(function successCallback(response){
                        $scope.authentication.user = response;
                        $location.path('/');
                    }, function errorCallback(response){
                        $scope.error = response.message;
                    });
                };
}]);