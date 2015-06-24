'use strict';

/**
 * @ngdoc overview
 * @name so1App
 * @description
 * # so1App
 *
 * Main module of the application.
 */
angular
  .module('so1App', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/campaigns', {
        templateUrl: 'views/campaignslist.html',
        controller: 'CampaignsListCtrl'
      })
      .when('/campaigns/:campaignId', {
        templateUrl: 'views/campaignsdetails.html',
        controller: 'CampaignsDetailsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
