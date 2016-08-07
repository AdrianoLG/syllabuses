'use strict';
(function(){

angular.module('04MeanApp')
  .controller('WeeksCtrl', function($scope, $stateParams, SyllabusService) {

    SyllabusService.get({id: $stateParams.id}, function(syllabus) {
        $scope.syllabus = syllabus;
        console.log($scope.syllabus);
    });

    $scope.goBack = function() {
        window.history.back();
    };

  });

})();
