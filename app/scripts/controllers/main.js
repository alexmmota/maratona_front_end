'use strict';

/**
 * @ngdoc function
 * @name maratonaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the maratonaApp
 */
angular.module('maratonaApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
