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
  	$scope.searchTerm = undefined;
  	$scope.matchingTerms = [{'name':'#53'}, {'name':'#62'}, {'name':'#18'}, {'name':'#27'}];

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
    };

    $scope.searchedCars = [
		{
			id: 53,
			status: 'Idle',
			distance: 64,
			trips: 3,
			location: 'Ramanathapuram',
			time: '15 min'
		}, 
		{
			id: 62,
			status: 'Running',
			distance: 103,
			trips: 6,
			location: 'Saibaba Colony',
			time: '6 min'
		},
		{
			id: 18,
			status: 'Idle',
			distance: 76,
			trips: 5,
			location: 'Avinashi Road Signal',
			time: '2 hr'
		}
    ];

  });
