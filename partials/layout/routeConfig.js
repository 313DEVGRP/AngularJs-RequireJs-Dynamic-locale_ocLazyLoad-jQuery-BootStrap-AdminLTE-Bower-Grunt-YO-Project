'use strict';

define(
        ['projectWeb'],
        function() {

          var routeModule = angular.module('projectWeb', ['ui.router',
              'oc.lazyLoad', 'ngAnimate', 'ngCookies', 'ngResource', 'ngRoute',
              'ngSanitize', 'ngTouch', 'pascalprecht.translate',
              'tmh.dynamicLocale']);

          routeModule.constant('DEBUG_MODE', true/* DEBUG_MODE */);
          routeModule.constant('VERSION_TAG', new Date().getTime());
          routeModule.constant('LOCALES', {
            'locales': {
              'ko_KR': '한글',
              'en_US': 'English'
            },
            'preferredLocale': 'en_US'
          });

          routeModule.config([
              '$routeProvider',
              '$stateProvider',
              '$locationProvider',
              '$urlRouterProvider',
              '$ocLazyLoadProvider',
              function($routeProvider, $stateProvider, $locationProvider,
                      $urlRouterProvider, $ocLazyLoadProvider) {

                $urlRouterProvider.otherwise("/");
                $locationProvider.hashPrefix("StandardDevelopment#");

                // You can also load via resolve
                $stateProvider.state('rivalWar', {
                  url: "/", // root route
                  views: {
                    '': {
                      controller: 'rivalWarLayoutController', // This
                      templateUrl: 'partials/layout/rivalWarIndex.html'
                    }
                  },
                  resolve: { // Any property
                    rivalWarIndexCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                      return $ocLazyLoad.load([{
                        name: 'rivalWarLayoutService',
                        files: ['partials/layout/rivalWarService.js']
                      }, {
                        name: 'rivalWarLayoutController',
                        files: ['partials/layout/rivalWarController.js']
                      }]);
                    }]
                  }
                }).state('dev', {
                  url: "/dev", // root
                  views: {
                    '': {
                      controller: 'devLayoutController', // This
                      templateUrl: 'partials/layout/devIndex.html'
                    }
                  },
                  resolve: { // Any property
                    devIndexCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                      return $ocLazyLoad.load([{
                        name: 'devLayoutDirective',
                        files: ['partials/layout/devDirective.js']
                      },{
                        name: 'devLayoutService',
                        files: ['partials/layout/devService.js']
                      }, {
                        name: 'devLayoutController',
                        files: ['partials/layout/devController.js']
                      }]);
                    }]
                  }
                });
              }]); // indexModule.config

          // Angular debug info
          routeModule.config(function($compileProvider, DEBUG_MODE) {
            if (!DEBUG_MODE) {
              $compileProvider.debugInfoEnabled(false);// disables AngularJS
                                                        // debug info
            }
          })
          // Angular Translate
          routeModule.config(function($translateProvider, DEBUG_MODE, LOCALES) {
            if (DEBUG_MODE) {
              $translateProvider.useMissingTranslationHandlerLog();// warns
                                                                    // about
            }
            $translateProvider.useStaticFilesLoader({
              prefix: 'partials/common/lang/locale-',
              suffix: '.json'
            });

            $translateProvider.useSanitizeValueStrategy('escapeParameters');
            $translateProvider.preferredLanguage(LOCALES.preferredLocale);
            $translateProvider.useLocalStorage();
          })
          // Angular Dynamic Locale
          routeModule
                  .config(function(tmhDynamicLocaleProvider) {
                    tmhDynamicLocaleProvider
                            .localeLocationPattern('lib/angular-i18n/angular-locale_{{locale}}.js');
                  });
        });
