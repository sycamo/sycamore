'use strict';

/* Directives */

angular.module('sycaDirectives', [])

// test directive
  .directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }])

// carousel direcdtive  
  .directive('ngCarousel', function() {
    return function(scope, elm, attrs) {
      scope.$watch('mail', function() {
        $(elm).carousel('pause');
      });
    } 
  })

// resize image directive  
  .directive('resizeImg', function(){
    return {
      restrict: 'A',
      link: function (scope, elm, attrs) {


        // *** regret that the resizecrop method doesn't work well with the carousel ******
        // elm.resizecrop({
        //   width: 600,
        //   height: 400,
        //   vertical: "middle"
        // }) 

        $(elm).addClass('imgmaxheight');

      }
      
    }


  });






