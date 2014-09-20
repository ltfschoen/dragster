(function(){

  'use strict';

  var dragsterApp = angular.module('DragsterApp', [
    'ngRoute',
    'templates',
    'dragsterControllers',
    'dragsterDirectives'
  ]);
  
  dragsterApp.config(['$routeProvider', '$locationProvider', 
    function($routeProvider, $locationProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'home.html',
          controller: 'HomeCtrl'
        })
        .otherwise({
          redirectTo: '/'
        });
      $locationProvider.html5Mode(true);
    }
  ]);

})();