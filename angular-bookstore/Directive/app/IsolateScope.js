var myModule = angular.module("MyModule", []);
myModule.directive("hello", function() {
    return {
        restrict: 'AE',
        scope:{},	//使每个hello都有独立作用域
        template: '<div><input type="text" ng-model="userName"/>{{userName}}</div>',
        replace: true
    }
});