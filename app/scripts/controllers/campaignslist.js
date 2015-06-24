'use strict';

/**
 * @ngdoc function
 * @name so1App.controller:CampaignsListCtrl
 * @description
 * # CampaignsListCtrl
 * Controller of the so1App
 */
angular.module('so1App')
  .controller('CampaignsListCtrl', function ($scope, $http) {

    $scope.campaigns = [];

    $http.get("/API/v1/campaigns.json").
      success(function (data, status, headers, config) {
        $scope.campaigns = data;
        console.log(data);

      })
      .error(function (data, status, headers, config) {
        console.log("something went terribly wrong");
      });

    $scope.page = function (campaignId) {
      location.href = "#/campaigns/" + campaignId;
    };

  });
