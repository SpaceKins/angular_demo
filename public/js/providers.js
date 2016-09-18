angular.module('myApp')
  .provider('Movies',function(){
    this.endpoint='';
    this.setEndPoint=function(endpoint){
      this.endpoint=endpoint;
    }

    this.$get=['$http',function($http){
      var endpoint=this.endpoint;

      return {
        getMovies: function(){
          return $http.get(endpoint);
        }
      }
    }];
  });

