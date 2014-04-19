'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('webFront.services', ['ngResource'])
  .factory('Post', ['$resource',
    function($resource){
      return $resource('post/:postId', {}, {
      // interaction with the api will live here
        })
    }
    ]);

