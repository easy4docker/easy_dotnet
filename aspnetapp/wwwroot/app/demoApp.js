
angular.module('demoApp', [])
.directive('appHeader', function() {
  return {
    templateUrl: "/app/templates/header.html",
    replace: true
  };
}).directive('appBody', function() {
  return {
    templateUrl: '/app/templates/body.html?' + new Date().getTime(),
    replace: true
  };
}).controller('loadData', function($scope, $http) {
  $scope, $http
  $http.get("/api")
  .then(function(response) {
    $scope.data = response.data;
  });
  /*
  $scope.beers = [0, 1, 2, 3, 4, 5, 6];
  
  if ($locale.id == 'en-us') {
    $scope.beerForms = {
      0: 'no beers',
      one: '{} beer',
      other: '{} beers'
    };
  } else {
    $scope.beerForms = {
      0: 'žiadne pivo',
      one: '{} pivo',
      few: '{} pivá',
      other: '{} pív'
    };
  }*/
});