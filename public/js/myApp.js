var myApp=angular.module('myApp',['ngRoute'])
  .config(['MoviesProvider','$routeProvider','$locationProvider',
    function(MoviesProvider,$routeProvider,$locationProvider){
      
      MoviesProvider.setEndPoint('/api/movies');

      $locationProvider.html5Mode({
        enabled:true,
        requireBase:false,
      })

      $routeProvider
        .when('/',{
          templateUrl: '/views/default.html'
        })
        .when('/books',{
          templateUrl: '/views/books.html',
          controller: 'bookController'
        })
        .when('/movies',{
          templateUrl: '/views/movies.html',
          controller: 'movieController'
        })
        .when('/other',{
          templateUrl: '/views/other.html',
          controller: 'myController'
        })
      }
    ])
  .run(['$rootScope','APP_VERSION',function($rootScope,APP_VERSION){
    $rootScope.APP_VERSION=APP_VERSION;
  }]);

/*

myApp.controller('myController',['$scope',function($scope){
  $scope.myFirstName='Steven';
  $scope.myModel ='Ready Player One';
}]);

*/
