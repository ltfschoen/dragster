(function(){

  'use strict';

  var dragsterApp = angular.module('DragsterApp', [
    'ngRoute',
    'templates',
    'dragsterControllers'
  ]);
  
  dragsterApp.config(['$routeProvider', '$locationProvider', 
    function($routeProvider, $locationProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'home.html',
          controller: 'HomeCtrl'
        });
      $locationProvider.html5Mode(true);
    }
  ]);

})();