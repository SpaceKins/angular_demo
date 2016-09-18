angular.module('myApp')
  .controller('myController',[
    '$scope',
    'mainCharacter',
    'CharacterVersionFactory',
    function($scope,mainCharacter,CharacterVersionFactory){
    //console.log(CharacterVersionFactory);  
    $scope.myFirstName='Steven Me';
    $scope.myModel ='Ready Player One';
    $scope.mainCharacter =mainCharacter;
    $scope.characterVersion=CharacterVersionFactory;
  }])

  /********** Chaining is allowed *************
    .controller('myController',['$scope',function($scope){
    $scope.myFirstName='Steven Me';
    $scope.myModel ='Ready Player One';
  }])

  *********************************************/