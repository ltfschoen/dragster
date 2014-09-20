(function(){

  'use strict';

  var dragsterApp = angular.module('dragsterApp', [
    'ngRoute',
    'templates',
    'dragsterControllers',
    'dragsterDirectives',
    'dragsterServices'
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