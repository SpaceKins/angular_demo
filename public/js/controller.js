angular.module('myApp')
  .controller('myController',[
    '$scope',
    'mainCharacter',
    'CharacterVersionFactory',
    'BookService',
    'Movies',
    function($scope,mainCharacter,CharacterVersionFactory,BookService,Movies) {
    //console.log(CharacterVersionFactory);  
    $scope.myFirstName='Steven Me';
    $scope.myModel ='Ready Player One';
    $scope.mainCharacter =mainCharacter;
    $scope.characterVersion=CharacterVersionFactory;
    $scope.BookService=BookService;

    $scope.movies=[];
    
    Movies.getMovies()
    .success((movies)=>{
      console.log(movies);
      $scope.movies=movies;
    });
  }])
  .controller('bookController',[
    '$scope',
    'BookService',
    function($scope,BookService) {
    $scope.BookService=BookService;
  }])

  .controller('movieController',[
    '$scope',
    'Movies',
    function($scope,Movies) {
    $scope.movies=[];
    
    Movies.getMovies()
    .success((movies)=>{
      console.log(movies);
      $scope.movies=movies;
    });
  }])
  /********** Chaining is allowed *************
    .controller('myController',['$scope',function($scope){
    $scope.myFirstName='Steven Me';
    $scope.myModel ='Ready Player One';
  }])

  *********************************************/