'use strict';

define(['projectWeb'], function () {

  var contentsSpecModule = angular.module('contentsSpecControllerModule', ['rivalWarLayoutServiceModule']);

  contentsSpecModule.controller('contentsSpecController', ['$scope',
    '$ocLazyLoad', '$stateParams', 'rivalWarLayoutService',
    function ($scope, $ocLazyLoad, $stateParams, rivalWarLayoutService) {

      console.log('contentsSpecController');

    }]);
});
