var myApp=angular.module('myApp',[])
.run(['$rootScope','APP_VERSION',function($rootScope,APP_VERSION){
  $rootScope.APP_VERSION=APP_VERSION;
}]);

/*

myApp.controller('myController',['$scope',function($scope){
  $scope.myFirstName='Steven';
  $scope.myModel ='Ready Player One';
}]);

*/
