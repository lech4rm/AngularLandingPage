
(function(){
  var myApp = angular.module('myApp', ['ngRoute']);

  //services
  /*myApp.service(['GifGrabber', function($http, $q){
    var deferred = $q.defer();
    $http.get('js/gifdata.json').then(function(data){
      deferred.resolve(data);
    });
    this.getGifs = function(){
      return deferred.promise;
    };
  }]);*/



  //controllers

  myApp.controller('GifController', ['$scope', '$http', function($scope, $http){
      $scope.randomize = function(){
        var random = Math.floor((Math.random() * $scope.gifs.length) + 0);
        return random;
      };
      $http.get('/js/gifdata.json').success(function(data){
        $scope.gifs = data;
        $scope.currentGif = $scope.gifs[$scope.randomize()];
      });
      $(function(){
        $('#randomizer').on('click', function(){
          $http.get('/js/gifdata.json').success(function(data){
            $scope.gifs = data;
            $scope.currentGif = $scope.gifs[$scope.randomize()];
          });
        });
      });
  }]);

  myApp.controller('blogCtrl', ['$scope', function($scope){
    $(function(){
      $('#twitter').css("display", "block");
    });
  }]);

  myApp.controller('homeCtrl', ['$scope', function($scope){
    $(function(){
      $('#twitter').css("display", "block");
    });
  }]);

  myApp.controller('aboutCtrl', ['$scope', function($scope){
    $(function(){
      $('#twitter').css("display", "block");
    });
  }]);

  myApp.controller('projectsCtrl', ['$scope', function($scope){
    $(function(){
      $('#twitter').css("display", "block");
    });
  }]);




  //routes

  myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'views/home-content.html',
      })
      .when('/projects', {
        templateUrl: 'views/projects-content.html'
      })
      .when('/blog', {
        templateUrl: 'views/blog-content.html',
        controller: 'blogCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about-content.html'
      })
      .otherwise('/');
  }]);
})();
