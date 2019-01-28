angular.module('Authentication',[])
    .factory('Authentication', [function(){
        console.log("Auth");
        var _this = this;
        
        _this._data = {
            user : window.user
        };
        
        return _this._data;
    
}]);