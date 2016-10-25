'use strict';

define(['projectWeb'], function() {
  var testPageModule = angular.module('projectWeb', ['ui.router', 'oc.lazyLoad', 'testPageService', 'rivalWarLayoutService']);

  testPageModule.controller('testPageController', ['$scope', '$ocLazyLoad', 'testPageService', 'rivalWarLayoutService',
    function($scope, $ocLazyLoad,testPageService,rivalWarLayoutService) {

      $scope.testName = "테스트 페이지입니다.";



      $ocLazyLoad.load([])
        .then(function() {
          testPageService.fire();
          rivalWarLayoutService.fire();
        });
    }
  ]);// testController.controller

});
