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
  	$scope.searchTerm = undefined;
  	$scope.matchingTerms = [{'name':'Ramanathapuram, Coimbatore'}, {'name':'RS Puram, Coimbatore'}, {'name':'Saibaba Colony, Coimbatore'}];
  	$scope.distanceCovered = '5.6k';
  	$scope.activeCabs = '120';
  	$scope.totalCabs = '153';

  $scope.addAlert = function() {
    $scope.alerts.push({msg: 'Another alert!'});
  };

  $scope.closeAlert = function(index) {
    $scope.alerts.splice(index, 1);
  };
  	// uiGmapGoogleMapApi is a promise.
    // The "then" callback function provides the google.maps object.
    uiGmapGoogleMapApi.then(function(maps) {
    	$scope.map = { center: { latitude: 11, longitude: 77 }, zoom: 12 };

    	$scope.cars = {
    		models: [
	    		{latitude: 11.055,
		        longitude: 77.055,
		        title: 'c1',
		    	id: 1},
		        {latitude: 11,
		        longitude: 76.95,
		        title: 'c2',
		    	id: 2},
		        {latitude: 11,
		        longitude: 77,
		        title: 'c3',
		    	id: 3},
		    	{latitude: 10.95,
		        longitude: 77,
		        title: 'c4',
		    	id: 4}
	    	],
	    	options: {icon: 'images/car-front.png'}
	    };

	    /* Single marker
	    $scope.car = {
	      id: 1,
	      coords: {
	        latitude: 11.05,
	        longitude: 77.05
	      },
	      options: { draggable: false, icon: 'images/car-front.png' },
	      events: {
	        dragend: function (marker, eventName, args) {
	          console.log('car dragend');
	          var lat = marker.getPosition().lat();
	          var lon = marker.getPosition().lng();
	          console.log(lat);
	          console.log(lon);
	        }
	      }
	    };
	    */

    });

  });
