'use strict';

describe('Component: SyllabusComponent', function () {

  // load the controller's module
  beforeEach(module('04MeanApp'));

  var SyllabusComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    SyllabusComponent = $componentController('SyllabusComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
