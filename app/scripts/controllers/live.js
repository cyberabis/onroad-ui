'use strict';

/**
 * @ngdoc function
 * @name onroadApp.controller:LiveCtrl
 * @description
 * # LiveCtrl
 * Controller of the onroadApp
 */
angular.module('onroadApp')
  .controller('LiveCtrl', function ($scope) {

  	$scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };

  });
