'use strict';

/**
 * @ngdoc function
 * @name onroadApp.controller:DriversCtrl
 * @description
 * # DriversCtrl
 * Controller of the onroadApp
 */
angular.module('onroadApp')
  .controller('DriversCtrl', function ($scope) {
  	$scope.$parent.routeSelection = 'metrics';
  });
