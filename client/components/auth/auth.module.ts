'use strict';

angular.module('04MeanApp.auth', [
  '04MeanApp.constants',
  '04MeanApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
