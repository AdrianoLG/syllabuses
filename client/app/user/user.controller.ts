'use strict';
(function(){

angular.module('04MeanApp')
  .controller('UserCtrl', function($scope, $state, User, socket, Auth) {

    $scope.isAuthenticated = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;

    User.query(function(users) {
        $scope.users = users;
        socket.syncUpdates('user', $scope.users);
    });

    $scope.$on('$destroy', function() {
        socket.unsyncUpdates('user');
    });

    $scope.goToUser = function(user) {
        $state.go('userdetails', {
            id: user._id
        });
    };

  });

})();
