'use strict';

define(['projectWeb'], function () {

  var contentsInfoModule = angular.module('contentsInfoControllerModule', ['rivalWarLayoutServiceModule']);

  contentsInfoModule.controller('contentsInfoController', ['$scope',
    '$ocLazyLoad', '$stateParams', 'rivalWarLayoutService',
    function ($scope, $ocLazyLoad, $stateParams, rivalWarLayoutService) {

      console.log('contentsInfoController');

    }]);
});
