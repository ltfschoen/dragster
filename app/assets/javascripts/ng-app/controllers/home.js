(function(){

  'use strict';

  var dragsterControllers = angular.module('dragsterControllers', []);

  dragsterControllers.controller('HomeCtrl', ['$scope', function($scope) {
    $scope.things = ['Test', 'Luke'];
  }]);

})();