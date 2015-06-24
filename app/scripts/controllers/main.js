'use strict';

/**
 * @ngdoc function
 * @name so1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the so1App
 */
angular.module('so1App')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
