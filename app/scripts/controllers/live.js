'use strict';

/**
 * @ngdoc function
 * @name onroadApp.controller:LiveCtrl
 * @description
 * # LiveCtrl
 * Controller of the onroadApp
 */
angular.module('onroadApp')
  .controller('LiveCtrl', function ($scope, uiGmapGoogleMapApi) {
  	$scope.$parent.routeSelection = 'live';

  	// uiGmapGoogleMapApi is a promise.
    // The "then" callback function provides the google.maps object.
    uiGmapGoogleMapApi.then(function(maps) {
    	$scope.map = { center: { latitude: 11, longitude: 77 }, zoom: 12 };
    });

  });
