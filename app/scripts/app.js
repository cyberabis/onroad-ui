'use strict';

/**
 * @ngdoc overview
 * @name onroadApp
 * @description
 * # onroadApp
 *
 * Main module of the application.
 */
angular
  .module('onroadApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'views/live.html',
        controller: 'LiveCtrl'
      })
      .when('/trips', {
        templateUrl: 'views/trips.html',
        controller: 'TripsCtrl'
      })
      .when('/fleet', {
        templateUrl: 'views/fleet.html',
        controller: 'FleetCtrl'
      })
      .when('/drivers', {
        templateUrl: 'views/drivers.html',
        controller: 'DriversCtrl'
      })
      .when('/account', {
        templateUrl: 'views/account.html',
        controller: 'AccountCtrl'
      })
      .when('/alerts', {
        templateUrl: 'views/alerts.html',
        controller: 'AccountCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
