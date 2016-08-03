'use strict';

(function() {

class MainController {

  constructor($http, $scope, socket) {
    this.$http = $http;
    this.socket = socket;
    this.syllabuses = [];

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('syllabus');
    });
  }

  $onInit() {
    this.$http.get('/api/syllabuses').then(response => {
      this.syllabuses = response.data;
      this.socket.syncUpdates('syllabus', this.syllabuses);
    });
  }

  addSyllabus() {
    if (this.nSyllabus) {
      this.$http.post('/api/syllabuses', { name: this.nSyllabus });
      this.nSyllabus = '';
    }
  }

  deleteSyllabus(syllabus) {
    this.$http.delete('/api/syllabuses/' + syllabus._id);
  }
}

angular.module('04MeanApp')
  .component('main', {
    templateUrl: 'app/main/main.html',
    controller: MainController
  });

})();
