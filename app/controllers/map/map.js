'use strict';

angular.module('myApp.map', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/map', {
    templateUrl: 'controllers/map/map.html',
    controller: 'MapCtrl'
  });
}])

.controller('MapCtrl', ['$scope', 'CrimesService', 'MapService', function($scope, CrimesService, MapService) {

  MapService.initMap();

  MapService.map.on('zoomend', function (e) {
      CrimesService.loadCrimes();
  });

  MapService.map.on('moveend', function (e) {
      CrimesService.loadCrimes();
  });

}]);
