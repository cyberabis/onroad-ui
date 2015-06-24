'use strict';

/**
 * @ngdoc function
 * @name onroadApp.controller:CarsCtrl
 * @description
 * # CarsCtrl
 * Controller of the onroadApp
 */
angular.module('onroadApp')
  .controller('CarsCtrl', function ($scope) {
  	$scope.$parent.routeSelection = 'metrics';

  	var carCount = [[1419716700000,45], [1419717000000,45], [1419717300000,40], [1419717600000,25], [1419717900000,28], [1419718200000,62], [1419718500000,58]];

    $scope.carsChartConfig = {
        options: {
            chart: {
                type: 'line',
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
                name: 'Active Cars',
                data: carCount,
                color: '#607D8B'
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
                text: 'Active Cars'
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
