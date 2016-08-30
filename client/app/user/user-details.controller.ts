'use strict';
(function(){

angular.module('04MeanApp')
  .controller('UserDetailsCtrl', function($scope, $state, $stateParams, $mdToast, User, socket, Auth, appConfig) {

    $scope.isAuthenticated = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.userRoles = appConfig.userRoles;

    User.get({id: $stateParams.id}, function(user) {
        $scope.user = user;
    });

    $scope.saveUser = function() {
        console.log('user', $scope.user._id);
        User.update({
            id: $scope.user._id
        }, $scope.user, function(user) {
            $scope.user = user;

            var toast = $mdToast.simple()
                .textContext('User saved')
                .action('OK')
                .highlightAction(false)
                .position('top');
            $mdToast.show(toast);
        });
    };

    $scope.goBack = function() {
        window.history.back();
    };

  });

})();
