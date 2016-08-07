'use strict';
(function(){

    angular.module('04MeanApp')
        .controller('SyllabusCtrl', function($scope, SyllabusService) {
            $scope.addNewSyllabus = function() {
                SyllabusService.save($scope.newSyllabus, function(syllabus) {
                    console.log(syllabus);
                });
            };
        });

})();
