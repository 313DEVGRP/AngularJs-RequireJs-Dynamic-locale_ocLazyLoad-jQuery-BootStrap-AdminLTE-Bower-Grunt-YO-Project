'use strict';

define(['projectWeb'], function() {

  var rivalWarIndexModule = angular.module('projectWeb', ['ui.router',
      'oc.lazyLoad', 'rivalWarLayoutService']);

  rivalWarIndexModule.controller('rivalWarLayoutController', ['$scope',
      '$ocLazyLoad', 'rivalWarLayoutService',
      function($scope, $ocLazyLoad, rivalWarLayoutService) {

        $scope.mainHeader = 'partials/layout/header/RivalWar/';
        $scope.mainSidebar = 'partials/layout/aside/RivalWar/';
        $scope.contentWrapper = 'partials/layout/contents/RivalWar/';
        $scope.mainFooter = 'partials/layout/footer/RivalWar/';
        $scope.controlSidebar = 'partials/layout/sidebar/RivalWar/';

        $scope.$on('$includeContentLoaded', function(event, file) {
          if (file === 'partials/layout/header/RivalWar/') {
            console.log(file);
          } else if (file === 'partials/layout/aside/RivalWar/') {
            rivalWarLayoutService.fire();
          } else if (file === 'partials/layout/contents/RivalWar/') {
            $ocLazyLoad.load('partials/layout/contents/RivalWar/index.css');
            rivalWarLayoutService.fire();
          } else if (file === 'partials/layout/footer/RivalWar/') {
            rivalWarLayoutService.fire();
          } else if (file === 'partials/layout/sidebar/RivalWar/') {
            console.log(file);
          }
        });

        $scope.$on('goToHome',
          function() {
            $scope.contentWrapper = "partials/layout/contents/RivalWar/";
            $ocLazyLoad.load('partials/layout/contents/RivalWar/index.css');
            $('li .active').removeClass('active');
            rivalWarLayoutService.fire();
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
              files : ['partials/layout/contents/RivalWar/test/service.js']
            },
            {
              name : 'testPageController',
              files : ['partials/layout/contents/RivalWar/test/controller.js']
            },
            'partials/layout/contents/RivalWar/test/index.css'
          ]).then(function () {
            $scope.contentWrapper = 'partials/layout/contents/RivalWar/test/';
          }, function (e) {
            console.log(e)
          })
        }

      }]);// indexModule.controller

  rivalWarIndexModule
  .controller(
      'rivalWarContentsController',
      [
          '$scope',
          '$ocLazyLoad',
          'rivalWarLayoutService',
          function($scope, $ocLazyLoad,
              rivalWarLayoutService) {

            $ocLazyLoad
                .load(
                    [
                        'partials/layout/contents/RivalWar/index.css'

                    ]).then(function() {
                  rivalWarLayoutService.fire();
                });
            // 페이지 타이틀
            $scope.mainTitle = 'ravalWar';
            // 상품 이름
            $scope.firstPlayer = 'Samsung';
            $scope.secondPlayer = 'iPhone';
            // 스텟 리스트 정리
          }
      ]);// rivalWarContentsController.controller
});
