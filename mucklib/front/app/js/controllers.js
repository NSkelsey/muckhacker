'use strict';

/* Controllers */

angular.module('webFront.controllers', [])
  .controller('PostListCtrl', function($scope, $http) {
      $http.get('posts.json').success(function(data) {
        data.forEach(function(post){
            post.route = '#/post/' + post.id
        });
        $scope.posts = data

      });

  })
  .controller('SinglePostCtrl', ['$scope', '$http', '$routeParams', 
  function($scope, $http, $routeParams) {
    $http.get('post' + $routeParams.postId + '.json').success(function(data){
        $scope.post = data;
    });
  }]);
