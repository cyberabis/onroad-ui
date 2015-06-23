'use strict';

/**
 * @ngdoc function
 * @name onroadApp.controller:TripsCtrl
 * @description
 * # TripsCtrl
 * Controller of the onroadApp
 */
angular.module('onroadApp')
  .controller('TripsCtrl', function ($scope) {
  	$scope.$parent.routeSelection = 'metrics';
  	/* Bar chart
  	$scope.tripsChartConfig = {
        options: {
            chart: {
                type: 'column'
            }
        },
        series: [{
        	name: 'Distance Covered',
            data: [1680, 1523, 1254, 876, 1750, 1500, 1326, 1677, 1743, 1300]
        }],
        title: {
            text: ''
        },
        loading: false,
        xAxis: {
        	categories: ['Jun 1', 'Jun 2', 'Jun 3', 'Jun 4', 'Jun 5', 'Jun 6', 'Jun 7', 'Jun 8', 'Jun 9', 'Jun 10']
        },
        yAxis: {
        	min: 0,
        	title: {
        		text: 'Kilometers'
        	}
        }
    };
    */

    var distances = [[1419716700000,1627.0], [1419717000000,1701.0], [1419717300000,1591.0], [1419717600000,1756.0], [1419717900000,1716.0], [1419718200000,1830.0], [1419718500000,1863.0]];

    $scope.tripsChartConfig = {
        options: {
            chart: {
                type: 'spline',
            	zoomType: 'x'
            },
	        legend: {
	            enabled: false
	        }
        },
        title: {
            text: ''
        },
        series: [
            {
                name: 'Distance Convered',
                data: distances,
                color: 'LightCoral'
            }
        ],
        xAxis: {
            type: 'datetime',
            title: {
                text: ''
            }
        },
        yAxis: {
            title: {
                text: 'Kilometers'
            }
        },
        size: {
           height: 250
        }, 
        loading: false,
        size: {
        	height: 150
        }
    }

  });
