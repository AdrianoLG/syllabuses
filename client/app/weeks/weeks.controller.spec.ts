'use strict';

describe('Component: WeeksComponent', function () {

  // load the controller's module
  beforeEach(module('04MeanApp'));

  var WeeksComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    WeeksComponent = $componentController('WeeksComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
