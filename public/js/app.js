var maps = angular.module('maps', ['ngMap']);

maps.controller('mapController', function($scope, $location, NgMap) {
  $scope.fbhref=$location.absUrl();
  NgMap.getMap().then(function(map) {
    console.log(map.getCenter().toString());
  });
});