(function(){

  'use strict';

  var dragsterControllers = angular.module('dragsterControllers', []);

  dragsterControllers.controller('HomeCtrl', ['$scope', 'Websites', function($scope, Websites) {
    $scope.websites = Websites.query();
    console.log($scope.websites);

    $scope.enableHood = function(item){
      item.hooded = true;
    };

    $scope.disableEdit = function(item){
      item.unhooded = false;
    };

  }]);

})();