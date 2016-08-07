'use strict';

angular.module('04MeanApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/syllabus/syllabus.html',
        controller: 'SyllabusCtrl'
      });
  });
