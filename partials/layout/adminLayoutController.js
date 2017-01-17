'use strict';

define(['projectWeb'], function() {

  var adminIndexModule = angular.module('projectWeb', ['ui.router',
    'oc.lazyLoad', 'adminLayoutService']);

  adminIndexModule.controller('adminLayoutController', ['$scope',
    '$ocLazyLoad', 'adminLayoutService',
    function($scope, $ocLazyLoad, adminLayoutService) {

      $scope.mainHeader = 'partials/layout/header/admin/';
      $scope.mainSidebar = 'partials/layout/aside/admin/';
      $scope.contentWrapper = 'partials/layout/contents/admin/';
      $scope.mainFooter = 'partials/layout/footer/admin/';
      $scope.controlSidebar = 'partials/layout/sidebar/admin/';

      $scope.$on('$includeContentLoaded', function(event, file) {
        if (file === 'partials/layout/header/admin/') {
          console.log(file);
        } else if (file === 'partials/layout/aside/admin/') {
          adminLayoutService.fire();
        } else if (file === 'partials/layout/contents/admin/') {
          $ocLazyLoad.load('partials/layout/contents/admin/index.css');
          adminLayoutService.fire();
        } else if (file === 'partials/layout/footer/admin/') {
          adminLayoutService.fire();
        } else if (file === 'partials/layout/sidebar/admin/') {
          console.log(file);
        }
      });

      $scope.$on('goToHome',
        function() {
          $scope.contentWrapper = "partials/layout/contents/admin/";
          $ocLazyLoad.load('partials/layout/contents/admin/index.css');
          $('li .active').removeClass('active');
          adminLayoutService.fire();
          console.log("goToHome");
        });

      $scope.broadcastGoToHome = function () {
        $scope.$broadcast('goToHome')
      };

      $scope.testPage = function () {
        console.log("testPage");
        $ocLazyLoad.load([
          {
            name : 'testPageService',
            files : ['partials/layout/contents/admin/test/service.js']
          },
          {
            name : 'testPageController',
            files : ['partials/layout/contents/admin/test/controller.js']
          },
          'partials/layout/contents/RivalWar/test/index.css'
        ]).then(function () {
          $scope.contentWrapper = 'partials/layout/contents/admin/test/';
        }, function (e) {
          console.log(e)
        })
      }

    }]);// indexModule.controller

  adminIndexModule
    .controller(
      'adminContentsController',
      [
        '$scope',
        '$ocLazyLoad',
        'adminLayoutService',
        function($scope, $ocLazyLoad,
                 adminLayoutService) {

          $ocLazyLoad
            .load(
              [
                'partials/layout/contents/admin/index.css'

              ]).then(function() {
            adminLayoutService.fire();
          });
          // 페이지 타이틀
          $scope.mainTitle = 'admin';
          // 상품 이름
          $scope.firstPlayer = 'Samsung';
          $scope.secondPlayer = 'iPhone';
          // 스텟 리스트 정리
        }
      ]);// adminContentsController.controller
});
