angular.module('myApp')
  .controller('myController',[
    '$scope',
    'mainCharacter',
    'CharacterVersionFactory',
    'BookService',
    function($scope,mainCharacter,CharacterVersionFactory,BookService){
    //console.log(CharacterVersionFactory);  
    $scope.myFirstName='Steven Me';
    $scope.myModel ='Ready Player One';
    $scope.mainCharacter =mainCharacter;
    $scope.characterVersion=CharacterVersionFactory;
    $scope.books=BookService.getBooks();

    console.log(BookService.getBooks());

    console.log(BookService.getBook(2));
    
  //  console.log(service instanceof BookService);
  }])

  /********** Chaining is allowed *************
    .controller('myController',['$scope',function($scope){
    $scope.myFirstName='Steven Me';
    $scope.myModel ='Ready Player One';
  }])

  *********************************************/