'use strict';

(function() {

  function UserResource($resource) {
    return $resource('/api/users/:id/:controller', {
      id: '@_id'
    }, {
        changePassword: {
          method: 'PUT',
          params: {
            controller: 'password'
          }
        },
        get: {
          method: 'GET',
          params: {
            id: 'me'
          }
        },
        put: {
          method: 'PUT',
        }
      });
  }

  angular.module('04MeanApp.auth')
    .factory('User', UserResource);

})();
