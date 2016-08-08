'use strict';

define(
        ['projectWeb'],
        function() {

          var routeModule = angular.module('projectWeb', ['ui.router',
              'oc.lazyLoad', 'ngAnimate', 'ngCookies', 'ngResource', 'ngRoute',
              'ngSanitize', 'ngTouch', 'pascalprecht.translate',
              'tmh.dynamicLocale']);

          routeModule.constant('DEBUG_MODE', true);
          routeModule.constant('VERSION_TAG', new Date().getTime());
          routeModule.constant('LOCALES', {
            'locales': {
              'en_US': 'English',
              'ko_KR': '한글'
            },
            'preferredLocale': 'English'
          }); // LOCALES end

          routeModule
                  .config([
                      '$routeProvider',
                      '$stateProvider',
                      '$locationProvider',
                      '$urlRouterProvider',
                      '$ocLazyLoadProvider',
                      function($routeProvider, $stateProvider,
                              $locationProvider, $urlRouterProvider,
                              $ocLazyLoadProvider) {

                        $urlRouterProvider.otherwise("/");
                        $locationProvider.hashPrefix("StandardDevelopment#");

                        $stateProvider
                                .state(
                                        'rivalWar',
                                        {
                                          url: "/",
                                          views: {
                                            '': {
                                              controller: 'rivalWarLayoutController',
                                              templateUrl: 'partials/layout/rivalWarIndex.html'
                                            }
                                          },
                                          resolve: {
                                            rivalWarIndexCtrl: [
                                                '$ocLazyLoad',
                                                function($ocLazyLoad) {
                                                  return $ocLazyLoad
                                                          .load([
                                                              {
                                                                name: 'rivalWarLayoutService',
                                                                files: ['partials/layout/rivalWarService.js']
                                                              },
                                                              {
                                                                name: 'rivalWarLayoutController',
                                                                files: ['partials/layout/rivalWarController.js']
                                                              }]);
                                                }]
                                          }
                                        })
                                .state(
                                        'dev',
                                        {
                                          url: "/dev",
                                          views: {
                                            '': {
                                              controller: 'devLayoutController',
                                              templateUrl: 'partials/layout/devIndex.html'
                                            }
                                          },
                                          resolve: {
                                            devIndexCtrl: [
                                                '$ocLazyLoad',
                                                function($ocLazyLoad) {
                                                  return $ocLazyLoad
                                                          .load([
                                                              {
                                                                name: 'devLayoutService',
                                                                files: ['partials/layout/devService.js']
                                                              },
                                                              {
                                                                name: 'devLayoutController',
                                                                files: ['partials/layout/devController.js']
                                                              }]);
                                                }]
                                          }
                                        });
                      }]); // routeModule.config

          routeModule.config(function($compileProvider, DEBUG_MODE) {
            if (!DEBUG_MODE) {
              $compileProvider.debugInfoEnabled(false);
            }
          });// $compileProvider end

          routeModule.config(function($translateProvider, DEBUG_MODE, LOCALES) {
            if (DEBUG_MODE) {
              $translateProvider.useMissingTranslationHandlerLog();// warns
            }
            $translateProvider.useStaticFilesLoader({
              prefix: 'partials/common/lang/locale-',
              suffix: '.json'
            });

            $translateProvider.useSanitizeValueStrategy('escapeParameters');
            $translateProvider.preferredLanguage(LOCALES.preferredLocale);
            $translateProvider.useLocalStorage();
          });// $translateProvider end

          routeModule
                  .config(function(tmhDynamicLocaleProvider) {
                    tmhDynamicLocaleProvider
                            .localeLocationPattern('lib/angular-i18n/angular-locale_{{locale}}.js');
                  }); // tmhDynamicLocaleProvider end

        }); // function end
