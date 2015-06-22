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
  	$scope.activeCabs = '43';
  	$scope.idleCabs = '25';

  $scope.addAlert = function() {
    $scope.alerts.push({msg: 'Another alert!'});
  };

  $scope.closeAlert = function(index) {
    $scope.alerts.splice(index, 1);
  };
  	// uiGmapGoogleMapApi is a promise.
    // The "then" callback function provides the google.maps object.
    uiGmapGoogleMapApi.then(function(maps) {
    	$scope.map = { center: { latitude: 11, longitude: 77 }, zoom: 13 };

    	$scope.cars = {
    		models: [
	    		{
	    			latitude: 11.04,
			        longitude: 77.04,
			        title: 'c1',
			    	id: 1,
			    	options: {
			    		labelContent: 'car #1', 
			    		labelClass: 'tm-marker-label',
			    		icon: 'images/car-moving.png'
			    	}
			    },
		        {
		        	latitude: 11,
			        longitude: 76.95,
			        title: 'c2',
			    	id: 2,
			    	options: {
			    		labelContent: 'car #2', 
			    		labelClass: 'tm-marker-label',
			    		icon: 'images/car-parked.png'
			    	}
			    },
		        {
		        	latitude: 11,
			        longitude: 77,
			        title: 'c3',
			    	id: 3,
			    	options: {
			    		labelContent: 'car #3', 
			    		labelClass: 'tm-marker-label',
			    		icon: 'images/car-moving.png'
			    	}
			    },
		    	{
		    		latitude: 10.975,
			        longitude: 77,
			        title: 'c4',
			    	id: 4,
			    	options: {
			    		labelContent: 'car #4', 
			    		labelClass: 'tm-marker-label',
			    		icon: 'images/car-parked.png'
			    	}
			    }
	    	],
	    	/*options: {
	    		icon: 'images/car-front.png'
	    	},*/
	    	events: {
	    		mouseover: function (marker, eventName, model, args) {
	    			console.log('car pointed: ' + model.title);
	    		}
	    	}
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
