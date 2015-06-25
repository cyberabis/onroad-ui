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

	var distances = [[1419716700000,2], [1419717000000,0], [1419717300000,0], [1419717600000,1], [1419717900000,4], [1419718200000,0], [1419718500000,2]];

	$scope.alertsChartConfig = {
        options: {
            chart: {
                type: 'line',
            	zoomType: 'x',
	        	backgroundColor: 'WhiteSmoke'
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
                name: 'Alerts',
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
                text: ''
            }, 
            min: 0
        },
        size: {
           height: 250
        }, 
        loading: false,
        size: {
        	height: 150
        }
    };

  });
