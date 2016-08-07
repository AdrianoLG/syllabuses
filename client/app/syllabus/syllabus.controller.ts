'use strict';
(function(){

    angular.module('04MeanApp')
        .controller('SyllabusCtrl', function($scope, SyllabusService, socket) {

            SyllabusService.query(function(syllabuses) {
                $scope.syllabuses = syllabuses;
                socket.syncUpdates('syllabus', $scope.syllabuses);
            });

            $scope.addNewSyllabus = function() {
                SyllabusService.save($scope.newSyllabus, function(syllabus) {
                    $scope.newSyllabus = {};
                });
            };

            $scope.$on('$destroy', function() {
                socket.unsyncUpdates('syllabus');
            });

        });

})();
