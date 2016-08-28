'use strict';
(function(){

angular.module('04MeanApp')
  .controller('UserDetailsCtrl', function($scope, $state, $stateParams, User, socket, Auth) {

    $scope.isAuthenticated = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;

    User.get({id: $stateParams.id}, function(user) {
        $scope.user = user;
    });

    $scope.goBack = function() {
        window.history.back();
    };

  });

})();
