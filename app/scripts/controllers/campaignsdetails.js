'use strict';

/**
 * @ngdoc function
 * @name so1App.controller:CampaignsDetailsCtrl
 * @description
 * # CampaignsDetailsCtrl
 * Controller of the so1App
 */
angular.module('so1App')
  .controller('CampaignsDetailsCtrl', function ($scope, $http) {

    $scope.chartConfig = {
      options: {
        //This is the Main Highcharts chart config. Any Highchart options are valid here.
        //will be overriden by values specified below.
        tooltip: {
          style: {
            padding: 10,
            fontWeight: 'bold'
          }
        }
      },
      //The below properties are watched separately for changes.

      //Series object (optional) - a list of series using normal highcharts series options.
      series: [{
        data: []
      }],
      //Title configuration (optional)
      title: {
        text: 'Statistics'
      },
      //Boolean to control showng loading status on chart (optional)
      //Could be a string if you want to show specific loading text.
      loading: false,
      //Configuration for the xAxis (optional). Currently only one x axis can be dynamically controlled.
      //properties currentMin and currentMax provied 2-way binding to the chart's maximimum and minimum
      xAxis: {
        title: {text: 'Hours'}
      },
      yAxis: {
        title: {text: 'value'}
      },
      //Whether to use HighStocks instead of HighCharts (optional). Defaults to false.
      useHighStocks: false,

    };

    function getPeriod(period) {
      $http.get("/API/v1/Campaigns/0/" + period + ".json")
        .success(function (data){
          $scope.chartConfig.series = data;

          switch(period) {
          case "day":
            $scope.chartConfig.xAxis.max = 23;
            $scope.chartConfig.xAxis.title.text = "Hours";
            $scope.chartConfig.xAxis.categories =
              [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
                16, 17, 18, 19, 20, 21, 22, 23];

            break;

          case "week":
            $scope.chartConfig.xAxis.max = 6;
            $scope.chartConfig.xAxis.title.text = "Day of week";
            $scope.chartConfig.xAxis.categories =
              ["mon", "tue", "wed", "thu", "fry", "sat", "sun"];

            break;

          case "month":
            $scope.chartConfig.xAxis.max = 30;
            $scope.chartConfig.xAxis.title.text = "Day of month";
            $scope.chartConfig.xAxis.categories =
              [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
                15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
                27, 28, 29, 30, 31];
            break;

          }
          console.log("details", period, data);
        });
    }

    getPeriod('day');

    $scope.getPeriod = getPeriod;

  });
