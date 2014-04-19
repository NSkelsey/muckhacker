'use strict';

// Declare app level module which depends on filters, and services
angular.module('webFront', [
  'btford.markdown',
  'ngRoute',
  'ngResource', 
  'webFront.filters',
  'webFront.services',
  'webFront.directives',
  'webFront.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'partials/list.html', controller: 'PostListCtrl'});
  $routeProvider.when('/post/:postId', {templateUrl: 'partials/post.html', controller: 'SinglePostCtrl'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);
