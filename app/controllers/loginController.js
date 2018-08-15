angular.module("bestDealApp")
    .controller("loginController", function ($scope, $rootscope, $location, authService) {
    
    $scope.login = function(username, password){
        authService.login(username, password, function(res){
            if(res){
                authService.setCredentials(username, password);
                $location.path("/home");
            }else{
                $scope.error = response.message;
            }
        })   
    };
        
});