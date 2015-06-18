'use strict';

/**
 * @ngdoc function
 * @name onroadApp.controller:AlertsCtrl
 * @description
 * # AlertsCtrl
 * Controller of the onroadApp
 */
angular.module('onroadApp')
  .controller('AlertsCtrl', function ($scope) {
	$scope.$parent.routeSelection = 'alerts';

  });
