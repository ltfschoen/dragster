(function(){

  'use strict';

  var dragsterDirectives = angular.module('dragsterDirectives', []);

  // Google Adsense
  // Reference (Post by Pablo): http://stackoverflow.com/questions/17416992/angular-js-adsense
  dragsterDirectives.directive('ads', 
    function() {
      return {
        restrict: 'A',
        transclude: true,
        replace: true,
        template: '<div ng-transclude></div>',
        link: function ($scope, element, attrs) {}
      };
    }
  );

})();
