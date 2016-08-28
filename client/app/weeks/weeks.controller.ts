'use strict';
(function(){

angular.module('04MeanApp')
  .controller('WeeksCtrl', function($scope, $stateParams, $mdDialog, $mdToast, SyllabusService, Auth) {

    $scope.isAdmin = Auth.isAdmin;

    SyllabusService.get({id: $stateParams.id}, function(syllabus) {
        $scope.syllabus = syllabus;
        console.log($scope.syllabus);
    });

    $scope.goBack = function() {
        window.history.back();
    };

    $scope.editWeekPlan = function(week) {
        $scope.editingWeekplan = week;
    };

    $scope.undoWeekplanEdit = function() {
        $scope.editingWeekplan = undefined;
    };

    $scope.deleteWeekPlan = function(weekplan, event) {
        var confirm = $mdDialog.confirm()
            .title('Delete Weekplan')
            .textContent('Are you sure you want to delete the Weekplan?')
            .ariaLabel('Delete')
            .targetEvent(event)
            .openFrom('#left')
            .ok('Yeah, sure')
            .cancel('No, just messing \'round');

        $mdDialog.show(confirm).then(function() {
            _.remove($scope.syllabus.weekplans, function(plan) {
                return plan._id === $scope.editingWeekplan._id;
            });

            SyllabusService.update({
                id: $scope.syllabus._id
            }, $scope.syllabus, function(syllabus) {
                $scope.syllabus = syllabus;
                var toast = $mdToast.simple()
                    .textContent('Weekplan deleted')
                    .action('OK')
                    .highlightAction(false)
                    .position('top');
                $mdToast.show(toast);
                $scope.editingWeekplan = undefined;
            });
        });
    };

    $scope.saveWeekplanEdit = function($event) {

    };

    $scope.newWeekplan = {};

    $scope.addWeekplan = function(form) {
        if (form.$valid) {
            $scope.newWeekplan.enabled = true;
            $scope.syllabus.weekplans.push($scope.newWeekplan);
            SyllabusService.update({
                id: $scope.syllabus._id
            }, $scope.syllabus, function(syllabus) {
                $scope.syllabus = syllabus;
                form.$setPristine();
                form.$setUntouched();
                var toast = $mdToast.simple()
                    .textContent('Weekplan created')
                    .action('OK')
                    .highlightAction(false)
                    .position('top');
                $mdToast.show(toast);
            });
        }
    };

  });

})();
