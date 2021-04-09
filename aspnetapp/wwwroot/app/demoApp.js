
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
});