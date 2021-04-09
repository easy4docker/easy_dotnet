
angular.module('demoApp', [])
.directive('appHeader', function() {
  return {
    templateUrl: "/app/templates/header.html",
    replace: true
  };
}).directive('appBody', function() {
  return {
    templateUrl: '/app/templates/body/bodyRoot.html',
    replace: true
  };
}).directive('appBodyApi', function() {
  return {
    templateUrl: '/app/templates/body/bodyApi.html',
    replace: true
  };
}).directive('appBodyDocument', function() {
  return {
    templateUrl: '/app/templates/body/bodyDocument.html',
    replace: true
  };
}).controller('loadData', function($scope, $http) {
  $scope, $http
  $http.get("/api")
  .then(function(response) {
    $scope.data = response.data;
  });
});