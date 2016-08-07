'use strict';

angular.module('04MeanApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('weeks', {
        url: '/weeks/:id',
        templateUrl: 'app/weeks/weeks.html',
        controller: 'WeeksCtrl'
      });
  });
