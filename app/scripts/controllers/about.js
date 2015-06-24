'use strict';

/**
 * @ngdoc function
 * @name so1App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the so1App
 */
angular.module('so1App')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
