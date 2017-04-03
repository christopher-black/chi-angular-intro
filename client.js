// First param links to <html ng-app="myApp">
// [] is the dependency injection array, what services do we need?
var myApp = angular.module('myApp', []); // Leave array empty for now

// Configure the app by creating a controller
myApp.controller('BaseController', ['$scope', function($scope){
  // $scope is the scope of this function but it's special. It allows
  // us to create variables that are data bound to the section of the
  // controller that it exists.

  $scope.hello = 'Hello World';
}]);

// Scope the controller to a set of elements
