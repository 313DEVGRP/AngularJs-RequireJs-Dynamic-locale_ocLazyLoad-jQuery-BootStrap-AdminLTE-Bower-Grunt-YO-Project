'use strict';

define(['projectWeb'], function () {

    var rivalWarIndexModule = angular.module('projectWeb', ['ui.router', 'oc.lazyLoad', 'rivalWarLayoutServiceModule', 'rivalWarDataServiceModule']);

    rivalWarIndexModule.controller('rivalWarLayoutController', [
        '$scope', '$ocLazyLoad', 'rivalWarLayoutService', 'rivalWarDataService', '$rootScope', '$window', '$translate', '$interval', '$stateParams', '$location',
        function ($scope, $ocLazyLoad, rivalWarLayoutService, rivalWarDataService, $rootScope, $window, $translate, $interval, $stateParams, $location) {

            // 다국어 처리 부
            var pageTitleTranslationId = 'PAGE_TITLE';
            var pageContentTranslationId = 'PAGE_CONTENT';

            $translate(pageTitleTranslationId, pageContentTranslationId).then(
                function (translatedPageTitle, translatedPageContent) {
                    $rootScope.pageTitle = translatedPageTitle;
                    $rootScope.pageContent = translatedPageContent;
                }
            );
            $scope.locale = $translate.use();
            $rootScope.$on('$routeChangeSuccess',
                function (event, current) {
                    $scope.currentPath = current.$$route.originalPath;
                }
            );
            $scope.currentTime = Date.now();
            $rootScope.$on('$translateChangeSuccess',
                function (event, data) {
                    $scope.locale = data.language;
                    $rootScope.pageTitle = $translate.instant(pageTitleTranslationId);
                    $rootScope.pageContent = $translate.instant(pageContentTranslationId);
                }
            );

            // child 페이지에서 상위 컨트롤러로 이벤트 드리븐 부분
            $scope.$on('goToHome',
                function () {
                    $scope.contentWrapper = "partials/layout/contents/rivalWar/";
                    $ocLazyLoad.load('partials/layout/contents/rivalWar/index.css');
                    $('li .active').removeClass('active');
                    console.log("goToHome");
                }
            );

            // load per excute
            $scope.$on('$includeContentLoaded',
                function (event, file) {
                    if (file === 'partials/layout/header/rivalWar/') {
                    } else if (file === 'partials/layout/aside/rivalWar/') {
                    } else if (file === 'partials/layout/contents/rivalWar/') {
                        $ocLazyLoad.load('partials/layout/contents/rivalWar/index.css');
                    } else if (file === 'partials/layout/footer/rivalWar/') {
                    } else if (file === 'partials/layout/sidebar/rivalWar/') {
                        rivalWarLayoutService.fire();
                    }
                }
            );

            // 로그인
            $scope.showSingIn = false;
            $scope.signIn = function () {
                $scope.showSingIn = !$scope.showSingIn;
            };



            $scope.facebookLogin = function () {
                console.log("facebook login");
                $scope.headerList = null;
                var url = 'http://www.313.co.kr/signin/facebook';
                var param = {c_id:10};
                rivalWarDataService.getData(url, 'POST', param, function(dataResponse) {
                    console.log("facebook login test");
                });
            };


            $ocLazyLoad.load(['partials/common/js/jstree-v.pre1.0/_lib/jquery.cookie.js'])
                .then(function () {
                    rivalWarLayoutService.sideView();
                });

            $scope.winWid = $window.innerWidth;
            angular.element($window).bind('resize', function () {
                $scope.winWid = $window.innerWidth;
                if ($scope.winWid >= 768) {
                    $scope.itemsPerPage = 5;
                } else if ($scope.winWid <= 768) {
                    $scope.itemsPerPage = 3;
                }
                console.log($scope.itemsPerPage);
            });
        }]);// indexModule.controller

}); // define end
