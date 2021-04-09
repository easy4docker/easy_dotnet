
const app = angular.module('demoApp', [])
app.directive('appHeader', function() {
  return {
    templateUrl: '/app/templates/header.html?' + new Date().getTime(),
    replace: true
  };
})
app.directive('appBody', function() {
  return {
    templateUrl: '/app/templates/body/bodyRoot.html?' + new Date().getTime(),
    controller: function AppBodyController() {
      this.switchModule = function() {
        alert('switchModule')
      };
    },
    replace: true
  };
}).directive('appBodyApi', function() {
  return {
    templateUrl: '/app/templates/body/bodyApi.html?' + new Date().getTime(),
    replace: true
  };
}).directive('appBodyDocument', function() {
  return {
    templateUrl: '/app/templates/body/bodyDocument.html?' + new Date().getTime(),
    replace: true
  };
})
app.controller('loadData', function($scope, $http) {

  $http.get("/api")
  .then(function(response) {
    $scope.data = response.data;
  });
});

app.controller('appBody', function($scope, $http) {
  $scope.bodyModule = 'api';
  $scope.switchModule = function(v) {
    $scope.bodyModule=v;
  };
});