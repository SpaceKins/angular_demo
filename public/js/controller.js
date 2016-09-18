angular.module('myApp')
  .controller('myController',['$scope','mainCharacter',function($scope,mainCharacter){
    $scope.myFirstName='Steven Me';
    $scope.myModel ='Ready Player One';
    $scope.mainCharacter =mainCharacter;
  }])

  /********** Chaining is allowed *************
    .controller('myController',['$scope',function($scope){
    $scope.myFirstName='Steven Me';
    $scope.myModel ='Ready Player One';
  }])

  *********************************************/