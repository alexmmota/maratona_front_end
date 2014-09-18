'use strict';

/**
 * @ngdoc function
 * @name maratonaApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the maratonaApp
 */
angular.module('maratonaApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
