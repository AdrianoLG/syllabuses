'use strict';

angular.module('04MeanApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('user', {
        url: '/user',
        templateUrl: 'app/user/user.html',
        controller: 'UserCtrl',
        resolve: {
            users: function(User) {
                return User.query().$promise;
            }
        }
      })
      .state('userdetails', {
        url: '/user/:id',
        templateUrl: 'app/user/user-details.html',
        controller: 'UserDetailsCtrl'
      });
  });
