'use strict';
(function(){

    angular.module('04MeanApp')
        .controller('SyllabusCtrl', function($scope, $state, SyllabusService, socket) {

            SyllabusService.query(function(syllabuses) {
                $scope.syllabuses = syllabuses;
                socket.syncUpdates('syllabus', $scope.syllabuses);
            });

            $scope.addNewSyllabus = function() {
                SyllabusService.save($scope.newSyllabus, function(syllabus) {
                    $scope.newSyllabus = {};
                });
            };

            $scope.deleteSyllabus = function(syllabus) {
                SyllabusService.delete({id: syllabus._id}, function() {
                    console.log('Syllabus deleted');
                });
            };

            $scope.goToSyllabus = function(syllabus) {
                $state.go('weeks', {
                    id: syllabus._id
                });
            };

            $scope.$on('$destroy', function() {
                socket.unsyncUpdates('syllabus');
            });

        });

})();
