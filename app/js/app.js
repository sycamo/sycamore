'use strict';


// Declare app level module which depends on filters, and services
// angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers']).
//   config(['$routeProvider', function($routeProvider) {
//     $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
//     $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
//     $routeProvider.otherwise({redirectTo: '/view1'});
//   }]);

/* App Module */

// angular.module('myApp', []).
//   config(['$routeProvider', function($routeProvider) {
//   $routeProvider.
//       when('/mails', {templateUrl: 'partials/partial1.html', controller: 'MailListCtrl'}).
//       when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'}).
//       otherwise({redirectTo: '/mails'});
// }]);


angular.module('sycamo', ['sycaFilters', 'sycaServices', 'sycaDirectives']).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/mails', {templateUrl: 'partials/listview.html', controller: MailListCtrl}).
      when('/mails/:mailId', {templateUrl: 'partials/maildetail.html', controller: MailDetailCtrl}).
      otherwise({redirectTo: '/mails'});
}]);

