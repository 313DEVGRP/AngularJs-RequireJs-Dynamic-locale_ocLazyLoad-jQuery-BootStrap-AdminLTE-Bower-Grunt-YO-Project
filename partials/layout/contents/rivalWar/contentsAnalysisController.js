'use strict';

define(['projectWeb'], function () {

  var contentsAnalysisModule = angular.module('contentsAnalysisControllerModule', ['rivalWarLayoutServiceModule']);

  contentsAnalysisModule.controller('contentsAnalysisController', ['$scope',
    '$ocLazyLoad', '$stateParams', 'rivalWarLayoutService',
    function ($scope, $ocLazyLoad, $stateParams, rivalWarLayoutService) {

      console.log('contentsAnalysisController');

    }]);
});
