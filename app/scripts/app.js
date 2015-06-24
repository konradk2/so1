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
    'ngTouch',
    'pascalprecht.translate',
    'highcharts-ng'
  ])
  .config(function ($routeProvider, $translateProvider) {
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
        redirectTo: '/campaigns'
      });

    $translateProvider.translations('en', {
      'CAMPAIGNS': 'Campaigns',
      'HOME': 'Home'
    });

    $translateProvider.translations('de', {
      'CAMPAIGNS': 'Kampagnen',
      'HOME': 'Start'
    });

    $translateProvider.preferredLanguage('en');
  });
