angular.module('myApp')
  .filter('beforeYearfilter',function(){       
      return function(movies,year,message){
        console.log(message);
        console.log(arguments);  
        return movies.filter(movie => movie.year < year);
      }
  });