angular.module('app', []).filter('length', function() {
  return function(text) {
    return ('' + (text || '')).length;
  }
});

angular.module('app')
.controller('PasswordController', function PasswordController($scope,$http) {
  $scope.password = '';
  $scope.movies = [];
  $scope.keyword = 'terminator';
  $scope.grade = function() {
    var size = $scope.password.length;
    if (size > 8) {
      $scope.strength = 'strong';
    } else if (size > 3) {
      $scope.strength = 'medium';
    } else {
      $scope.strength = 'weak';
    }
  };
  
   $scope.getMovieData = function getMovieData() {
          $http.get('http://www.omdbapi.com/', {
              params: { s: $scope.keyword }
            }).success(function(data, status, headers, config) {
              $scope.movies = data.Search;
            }).error(function(data, status, headers, config) {
              $scope.movies = [];
          });
        };
  
});

angular.module('app')
.directive('aGreatEye', function () {
    return {
        restrict: 'E',
        replace: true,
        template: '<h1>lidless, wreathed in flame, {{1 + 1}} times</h1>'
    };
});





