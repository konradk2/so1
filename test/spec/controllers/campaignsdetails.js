'use strict';

describe('Controller: CampaignsdetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('so1App'));

  var CampaignsdetailsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CampaignsdetailsCtrl = $controller('CampaignsdetailsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
