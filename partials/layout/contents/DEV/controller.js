'use strict';

define(['projectWeb'], function() {

  var devContentsModule = angular.module('projectWeb', ['ui.router',
      'oc.lazyLoad']);

  devContentsModule.controller('devContentsController', ['$scope', '$ocLazyLoad',
      function($scope, $ocLazyLoad) {
        console.log('devContentsController');
      }]);// devContentsController.controller

});
