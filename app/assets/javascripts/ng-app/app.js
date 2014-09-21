(function(){

  'use strict';

  var dragsterApp = angular.module('dragsterApp', [
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
          controller: 'PortfolioController'
        })
        .otherwise({
          redirectTo: '/'
        });
      $locationProvider.html5Mode(true);
    }
  ]);

})();