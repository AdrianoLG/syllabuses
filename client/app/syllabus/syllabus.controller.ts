'use strict';
(function(){

    angular.module('04MeanApp')
        .controller('SyllabusCtrl', function($scope, $state, $mdToast, SyllabusService, socket, Auth) {

            $scope.isAuthenticated = Auth.isLoggedIn;

            $scope.isOwner = function(syllabus) {
                return Auth.getCurrentUser()._id === syllabus.owner._id;
            };

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
                    _.remove($scope.syllabuses, function(syl) {
                        return syl._id === syllabus._id;
                    });
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
