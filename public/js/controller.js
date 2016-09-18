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
    
    //$scope.books=BookService.getBooks();
    console.log(BookService);
    //console.log(BookService.getBooks());
    //console.log(BookService.getBook(2));
    
  //  console.log(service instanceof BookService);
  }])

  /********** Chaining is allowed *************
    .controller('myController',['$scope',function($scope){
    $scope.myFirstName='Steven Me';
    $scope.myModel ='Ready Player One';
  }])

  *********************************************/