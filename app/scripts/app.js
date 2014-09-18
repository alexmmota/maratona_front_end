'use strict';

/**
 * @ngdoc overview
 * @name maratonaApp
 * @description
 * # maratonaApp
 *
 * Main module of the application.
 */
angular
  .module('maratonaApp', [
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
