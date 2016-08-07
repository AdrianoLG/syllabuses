'use strict';

angular.module('04MeanApp')
    .factory('SyllabusService', function($resource) {
        return $resource('/api/syllabuses/:id', {
            id: '@id'
        });
    });
