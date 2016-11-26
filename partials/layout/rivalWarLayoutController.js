'use strict';

define(
        ['projectWeb'],
        function() {

          var rivalWarIndexModule = angular.module('projectWeb', ['ui.router',
              'oc.lazyLoad', 'rivalWarLayoutService']);

          rivalWarIndexModule
                  .controller(
                          'rivalWarLayoutController',
                          [
                              '$scope',
                              '$ocLazyLoad',
                              'rivalWarLayoutService',
                              '$rootScope',
                              '$translate',
                              '$interval',
                              '$stateParams',
                              function($scope, $ocLazyLoad, rivalWarLayoutService,
                                      $rootScope, $translate, $interval,
                                      $stateParams) {

                                // 다국어 처리 부
                                /**
                                 * Translations for the view
                                 */
                                var pageTitleTranslationId = 'PAGE_TITLE';
                                var pageContentTranslationId = 'PAGE_CONTENT';

                                $translate(pageTitleTranslationId,
                                        pageContentTranslationId)
                                        .then(
                                                function(translatedPageTitle,
                                                        translatedPageContent) {
                                                  $rootScope.pageTitle = translatedPageTitle;
                                                  $rootScope.pageContent = translatedPageContent;
                                                });

                                /**
                                 * $scope.locale
                                 */
                                $scope.locale = $translate.use();

                                /**
                                 * Provides info about current route path
                                 */
                                $rootScope
                                        .$on(
                                                '$routeChangeSuccess',
                                                function(event, current) {
                                                  $scope.currentPath = current.$$route.originalPath;
                                                });

                                /**
                                 * Current time
                                 */
                                $scope.currentTime = Date.now();

                                /**
                                 * EVENTS
                                 */
                                $rootScope
                                        .$on(
                                                '$translateChangeSuccess',
                                                function(event, data) {
                                                  $scope.locale = data.language;
                                                  $rootScope.pageTitle = $translate
                                                          .instant(pageTitleTranslationId);
                                                  $rootScope.pageContent = $translate
                                                          .instant(pageContentTranslationId);
                                                });

                                // ng-include 처리부
                                $scope.mainHeader = 'partials/layout/header/rivalWar/';
                                $scope.mainSidebar = 'partials/layout/aside/rivalWar/';
                                $scope.contentWrapper = 'partials/layout/contents/rivalWar/';
                                $scope.mainFooter = 'partials/layout/footer/rivalWar/';
                                $scope.controlSidebar = 'partials/layout/sidebar/rivalWar/';

                                // load per excute
                                $scope
                                        .$on(
                                                '$includeContentLoaded',
                                                function(event, file) {
                                                  if (file === 'partials/layout/header/rivalWar/') {
                                                    console.log(file);
                                                  } else if (file === 'partials/layout/aside/rivalWar/') {
                                                    rivalWarLayoutService.fire();
                                                  } else if (file === 'partials/layout/contents/rivalWar/') {
                                                    $ocLazyLoad
                                                            .load('partials/layout/contents/rivalWar/index.css');
                                                    rivalWarLayoutService.fire();
                                                  } else if (file === 'partials/layout/footer/rivalWar/') {
                                                    rivalWarLayoutService.fire();
                                                  } else if (file === 'partials/layout/sidebar/rivalWar/') {
                                                    console.log(file);
                                                  }
                                                });

                                // child 페이지에서 상위 컨트롤러로 이벤트 드리븐 부분
                                $scope
                                        .$on(
                                                'goToHome',
                                                function() {
                                                  $scope.contentWrapper = "partials/layout/contents/rivalWar/";
                                                  $ocLazyLoad
                                                          .load('partials/layout/contents/rivalWar/index.css');
                                                  $('li .active').removeClass(
                                                          'active');
                                                  rivalWarLayoutService.fire();
                                                  console.log("goToHome");
                                                });

                                // SubModule 을 URL로 처리하는 경우
                                $scope
                                        .$on(
                                                'emitSubModule',
                                                function(event, args) {
                                                	console.log(args.message);
                                                  $ocLazyLoad
                                                          .load(
                                                                  [
                                                                      {
                                                                        name: 'springMyBatisService',
                                                                        files: ['partials/layout/contents/DEV/jstree/'+args.message+'/service.js']
                                                                      },
                                                                      {
                                                                        name: 'springMyBatisController',
                                                                        files: ['partials/layout/contents/DEV/jstree/'+args.message+'/controller.js']
                                                                      },
                                                                      'partials/layout/contents/DEV/jstree/'+args.message+'/index.css'])
                                                          .then(
                                                                  function() {
                                                                    $scope.contentWrapper = "partials/layout/contents/DEV/jstree/"+args.message+"/";
                                                                  },
                                                                  function(e) {
                                                                    console
                                                                            .log(e);
                                                                  });
                                                });

                                // 나머지 버튼 처리.
                                $scope.whyJsTree = function() {
                                  $ocLazyLoad
                                          .load(
                                                  [
                                                      {
                                                        name: 'whyJsTreeService',
                                                        files: ['partials/layout/contents/DEV/jstree/whyJsTree/service.js']
                                                      },
                                                      {
                                                        name: 'whyJsTreeController',
                                                        files: ['partials/layout/contents/DEV/jstree/whyJsTree/controller.js']
                                                      },
                                                      'partials/layout/contents/DEV/jstree/whyJsTree/index.css'])
                                          .then(
                                                  function() {
                                                    $scope.contentWrapper = "partials/layout/contents/DEV/jstree/whyJsTree/";
                                                  }, function(e) {
                                                    console.log(e);
                                                  });
                                };

                                $scope.jsTreeArchitecture = function() {
                                  $ocLazyLoad
                                          .load(
                                                  [
                                                      {
                                                        name: 'jsTreeArchitectureService',
                                                        files: ['partials/layout/contents/DEV/jstree/jsTreeArchitecture/service.js']
                                                      },
                                                      {
                                                        name: 'jsTreeArchitectureController',
                                                        files: ['partials/layout/contents/DEV/jstree/jsTreeArchitecture/controller.js']
                                                      },
                                                      'partials/layout/contents/DEV/jstree/jsTreeArchitecture/index.css'])
                                          .then(
                                                  function() {
                                                    $scope.contentWrapper = "partials/layout/contents/DEV/jstree/jsTreeArchitecture/";
                                                  }, function(e) {
                                                    console.log(e);
                                                  });
                                };

                                $scope.strutsiBatis = function() {
                                  $ocLazyLoad
                                          .load(
                                                  [
                                                      {
                                                        name: 'strutsiBatisService',
                                                        files: ['partials/layout/contents/DEV/jstree/strutsiBatis/service.js']
                                                      },
                                                      {
                                                        name: 'strutsiBatisController',
                                                        files: ['partials/layout/contents/DEV/jstree/strutsiBatis/controller.js']
                                                      },
                                                      'partials/layout/contents/DEV/jstree/strutsiBatis/index.css'])
                                          .then(
                                                  function() {
                                                    $scope.contentWrapper = "partials/layout/contents/DEV/jstree/strutsiBatis/";
                                                  }, function(e) {
                                                    console.log(e);
                                                  });
                                };

                                $scope.springMyBatis = function() {
                                  $ocLazyLoad
                                          .load(
                                                  [
                                                      {
                                                        name: 'springMyBatisService',
                                                        files: ['partials/layout/contents/rivalWar/jstree/springMyBatis/service.js']
                                                      },
                                                      {
                                                        name: 'springMyBatisController',
                                                        files: ['partials/layout/contents/rivalWar/jstree/springMyBatis/controller.js']
                                                      },
                                                      'partials/layout/contents/rivalWar/jstree/springMyBatis/index.css'])
                                          .then(
                                                  function() {
                                                    $scope.contentWrapper = "partials/layout/contents/rivalWar/jstree/springMyBatis/";
                                                  }, function(e) {
                                                    console.log(e);
                                                  });
                                };

                                $scope.springHibernate = function() {
                                  $ocLazyLoad
                                          .load(
                                                  [
                                                      {
                                                        name: 'springHibernateService',
                                                        files: ['partials/layout/contents/DEV/jstree/springHibernate/service.js']
                                                      },
                                                      {
                                                        name: 'springHibernateController',
                                                        files: ['partials/layout/contents/DEV/jstree/springHibernate/controller.js']
                                                      },
                                                      'partials/layout/contents/DEV/jstree/springHibernate/index.css'])
                                          .then(
                                                  function() {
                                                    $scope.contentWrapper = "partials/layout/contents/DEV/jstree/springHibernate/";
                                                  }, function(e) {
                                                    console.log(e);
                                                  });
                                };

                                $scope.dwr = function() {
                                  $ocLazyLoad
                                          .load(
                                                  [
                                                      {
                                                        name: 'dwrService',
                                                        files: ['partials/layout/contents/DEV/jstree/DWR/service.js']
                                                      },
                                                      {
                                                        name: 'dwrController',
                                                        files: ['partials/layout/contents/DEV/jstree/DWR/controller.js']
                                                      },
                                                      'partials/layout/contents/DEV/jstree/DWR/index.css'])
                                          .then(
                                                  function() {
                                                    $scope.contentWrapper = "partials/layout/contents/DEV/jstree/DWR/";
                                                  }, function(e) {
                                                    console.log(e);
                                                  });
                                };

                                $scope.lucene = function() {
                                  $ocLazyLoad
                                          .load(
                                                  [
                                                      {
                                                        name: 'luceneService',
                                                        files: ['partials/layout/contents/DEV/jstree/Lucene/service.js']
                                                      },
                                                      {
                                                        name: 'luceneController',
                                                        files: ['partials/layout/contents/DEV/jstree/Lucene/controller.js']
                                                      },
                                                      'partials/layout/contents/DEV/jstree/Lucene/index.css'])
                                          .then(
                                                  function() {
                                                    $scope.contentWrapper = "partials/layout/contents/DEV/jstree/Lucene/";
                                                  }, function(e) {
                                                    console.log(e);
                                                  });
                                };

                                $scope.hadoop = function() {
                                  $ocLazyLoad
                                          .load(
                                                  [
                                                      {
                                                        name: 'hadoopService',
                                                        files: ['partials/layout/contents/DEV/jstree/Hadoop/service.js']
                                                      },
                                                      {
                                                        name: 'hadoopController',
                                                        files: ['partials/layout/contents/DEV/jstree/Hadoop/controller.js']
                                                      },
                                                      'partials/layout/contents/DEV/jstree/Hadoop/index.css'])
                                          .then(
                                                  function() {
                                                    $scope.contentWrapper = "partials/layout/contents/DEV/jstree/Hadoop/";
                                                  }, function(e) {
                                                    console.log(e);
                                                  });
                                };

                                $scope.machineLearning = function() {
                                  $ocLazyLoad
                                          .load(
                                                  [
                                                      {
                                                        name: 'machineLearningService',
                                                        files: ['partials/layout/contents/DEV/jstree/MachineLearning/service.js']
                                                      },
                                                      {
                                                        name: 'machineLearningController',
                                                        files: ['partials/layout/contents/DEV/jstree/MachineLearning/controller.js']
                                                      },
                                                      'partials/layout/contents/DEV/jstree/MachineLearning/index.css'])
                                          .then(
                                                  function() {
                                                    $scope.contentWrapper = "partials/layout/contents/DEV/jstree/MachineLearning/";
                                                  }, function(e) {
                                                    console.log(e);
                                                  });
                                };

                                $scope.confluence = function() {
                                  $ocLazyLoad
                                          .load(
                                                  [
                                                      {
                                                        name: 'confluenceService',
                                                        files: ['partials/layout/contents/DEV/tools/confluence/service.js']
                                                      },
                                                      {
                                                        name: 'confluenceController',
                                                        files: ['partials/layout/contents/DEV/tools/confluence/controller.js']
                                                      },
                                                      'partials/layout/contents/DEV/tools/confluence/index.css'])
                                          .then(
                                                  function() {
                                                    $scope.contentWrapper = "partials/layout/contents/DEV/tools/confluence/";
                                                  }, function(e) {
                                                    console.log(e);
                                                  });
                                };

                                $scope.jira = function() {
                                  $ocLazyLoad
                                          .load(
                                                  [
                                                      {
                                                        name: 'jiraService',
                                                        files: ['partials/layout/contents/DEV/tools/jira/service.js']
                                                      },
                                                      {
                                                        name: 'jiraController',
                                                        files: ['partials/layout/contents/DEV/tools/jira/controller.js']
                                                      },
                                                      'partials/layout/contents/DEV/tools/jira/index.css'])
                                          .then(
                                                  function() {
                                                    $scope.contentWrapper = "partials/layout/contents/DEV/tools/jira/";
                                                  }, function(e) {
                                                    console.log(e);
                                                  });
                                };

                                $scope.github = function() {
                                  $ocLazyLoad
                                          .load(
                                                  [
                                                      {
                                                        name: 'githubService',
                                                        files: ['partials/layout/contents/DEV/tools/github/service.js']
                                                      },
                                                      {
                                                        name: 'githubController',
                                                        files: ['partials/layout/contents/DEV/tools/github/controller.js']
                                                      },
                                                      'partials/layout/contents/DEV/tools/github/index.css'])
                                          .then(
                                                  function() {
                                                    $scope.contentWrapper = "partials/layout/contents/DEV/tools/github/";
                                                  }, function(e) {
                                                    console.log(e);
                                                  });
                                };

                                $scope.fisheyeCrucible = function() {
                                  $ocLazyLoad
                                          .load(
                                                  [
                                                      {
                                                        name: 'fisheyeCrucibleService',
                                                        files: ['partials/layout/contents/DEV/tools/fisheyeCrucible/service.js']
                                                      },
                                                      {
                                                        name: 'fisheyeCrucibleController',
                                                        files: ['partials/layout/contents/DEV/tools/fisheyeCrucible/controller.js']
                                                      },
                                                      'partials/layout/contents/DEV/tools/fisheyeCrucible/index.css'])
                                          .then(
                                                  function() {
                                                    $scope.contentWrapper = "partials/layout/contents/DEV/tools/fisheyeCrucible/";
                                                  }, function(e) {
                                                    console.log(e);
                                                  });
                                };

                                $scope.nas = function() {
                                  $ocLazyLoad
                                          .load(
                                                  [
                                                      {
                                                        name: 'nasService',
                                                        files: ['partials/layout/contents/DEV/tools/nas/service.js']
                                                      },
                                                      {
                                                        name: 'nasController',
                                                        files: ['partials/layout/contents/DEV/tools/nas/controller.js']
                                                      },
                                                      'partials/layout/contents/nas/index.css'])
                                          .then(
                                                  function() {
                                                    $scope.contentWrapper = "partials/layout/contents/DEV/tools/nas/";
                                                  }, function(e) {
                                                    console.log(e);
                                                  });
                                };

                                $scope.nexus = function() {
                                  $ocLazyLoad
                                          .load(
                                                  [
                                                      {
                                                        name: 'nexusService',
                                                        files: ['partials/layout/contents/DEV/tools/nexus/service.js']
                                                      },
                                                      {
                                                        name: 'nexusController',
                                                        files: ['partials/layout/contents/DEV/tools/nexus/controller.js']
                                                      },
                                                      'partials/layout/contents/DEV/tools/nexus/index.css'])
                                          .then(
                                                  function() {
                                                    $scope.contentWrapper = "partials/layout/contents/DEV/tools/nexus/";
                                                  }, function(e) {
                                                    console.log(e);
                                                  });
                                };

                                $scope.bamboo = function() {
                                  $ocLazyLoad
                                          .load(
                                                  [
                                                      {
                                                        name: 'bambooService',
                                                        files: ['partials/layout/contents/DEV/tools/bamboo/service.js']
                                                      },
                                                      {
                                                        name: 'bambooController',
                                                        files: ['partials/layout/contents/DEV/tools/bamboo/controller.js']
                                                      },
                                                      'partials/layout/contents/DEV/tools/bamboo/index.css'])
                                          .then(
                                                  function() {
                                                    $scope.contentWrapper = "partials/layout/contents/DEV/tools/bamboo/";
                                                  }, function(e) {
                                                    console.log(e);
                                                  });
                                };

                                $scope.hudson = function() {
                                  $ocLazyLoad
                                          .load(
                                                  [
                                                      {
                                                        name: 'hudsonService',
                                                        files: ['partials/layout/contents/DEV/tools/hudson/service.js']
                                                      },
                                                      {
                                                        name: 'hudsonController',
                                                        files: ['partials/layout/contents/DEV/tools/hudson/controller.js']
                                                      },
                                                      'partials/layout/contents/DEV/tools/hudson/index.css'])
                                          .then(
                                                  function() {
                                                    $scope.contentWrapper = "partials/layout/contents/DEV/tools/hudson/";
                                                  }, function(e) {
                                                    console.log(e);
                                                  });
                                };

                                $scope.maven = function() {
                                  $ocLazyLoad
                                          .load(
                                                  [
                                                      {
                                                        name: 'mavenService',
                                                        files: ['partials/layout/contents/DEV/tools/maven/service.js']
                                                      },
                                                      {
                                                        name: 'mavenController',
                                                        files: ['partials/layout/contents/DEV/tools/maven/controller.js']
                                                      },
                                                      'partials/layout/contents/DEV/tools/maven/index.css'])
                                          .then(
                                                  function() {
                                                    $scope.contentWrapper = "partials/layout/contents/DEV/tools/maven/";
                                                  }, function(e) {
                                                    console.log(e);
                                                  });
                                };

                                $scope.sonar = function() {
                                  $ocLazyLoad
                                          .load(
                                                  [
                                                      {
                                                        name: 'sonarService',
                                                        files: ['partials/layout/contents/DEV/tools/sonar/service.js']
                                                      },
                                                      {
                                                        name: 'sonarController',
                                                        files: ['partials/layout/contents/DEV/tools/sonar/controller.js']
                                                      },
                                                      'partials/layout/contents/DEV/tools/sonar/index.css'])
                                          .then(
                                                  function() {
                                                    $scope.contentWrapper = "partials/layout/contents/DEV/tools/sonar/";
                                                  }, function(e) {
                                                    console.log(e);
                                                  });
                                };

                                $scope.google = function() {
                                  $ocLazyLoad
                                          .load(
                                                  [
                                                      {
                                                        name: 'googleService',
                                                        files: ['partials/layout/contents/DEV/tools/google/service.js']
                                                      },
                                                      {
                                                        name: 'googleController',
                                                        files: ['partials/layout/contents/DEV/tools/google/controller.js']
                                                      },
                                                      'partials/layout/contents/DEV/tools/google/index.css'])
                                          .then(
                                                  function() {
                                                    $scope.contentWrapper = "partials/layout/contents/DEV/tools/google/";
                                                  }, function(e) {
                                                    console.log(e);
                                                  });
                                };

                                $scope.naver = function() {
                                  $ocLazyLoad
                                          .load(
                                                  [
                                                      {
                                                        name: 'naverService',
                                                        files: ['partials/layout/contents/DEV/tools/naver/service.js']
                                                      },
                                                      {
                                                        name: 'naverController',
                                                        files: ['partials/layout/contents/DEV/tools/naver/controller.js']
                                                      },
                                                      'partials/layout/contents/DEV/tools/naver/index.css'])
                                          .then(
                                                  function() {
                                                    $scope.contentWrapper = "partials/layout/contents/DEV/tools/naver/";
                                                  }, function(e) {
                                                    console.log(e);
                                                  });
                                };

                                $scope.backendDevelopers = function() {
                                  $ocLazyLoad
                                          .load(
                                                  [
                                                      {
                                                        name: 'backendDevelopersService',
                                                        files: ['partials/layout/contents/DEV/stakeholder/backendDevelopers/service.js']
                                                      },
                                                      {
                                                        name: 'backendDevelopersController',
                                                        files: ['partials/layout/contents/DEV/stakeholder/backendDevelopers/controller.js']
                                                      },
                                                      'partials/layout/contents/DEV/stakeholder/backendDevelopers/index.css'])
                                          .then(
                                                  function() {
                                                    $scope.contentWrapper = "partials/layout/contents/DEV/stakeholder/backendDevelopers/";
                                                  }, function(e) {
                                                    console.log(e);
                                                  });
                                };

                                $scope.customers = function() {

                                  $ocLazyLoad
                                          .load(
                                                  [
                                                      {
                                                        name: 'customersService',
                                                        files: ['partials/layout/contents/DEV/stakeholder/customers/service.js']
                                                      },
                                                      {
                                                        name: 'customersController',
                                                        files: ['partials/layout/contents/DEV/stakeholder/customers/controller.js']
                                                      },
                                                      'partials/layout/contents/DEV/stakeholder/customers/index.css'])
                                          .then(
                                                  function() {
                                                    $scope.contentWrapper = "partials/layout/contents/DEV/stakeholder/customers/";
                                                  }, function(e) {
                                                    console.log(e);
                                                  });
                                };

                                $scope.frontendDevelopers = function() {
                                  $ocLazyLoad
                                          .load(
                                                  [
                                                      {
                                                        name: 'frontendDevelopersService',
                                                        files: ['partials/layout/contents/DEV/stakeholder/frontendDevelopers/service.js']
                                                      },
                                                      {
                                                        name: 'frontendDevelopersController',
                                                        files: ['partials/layout/contents/DEV/stakeholder/frontendDevelopers/controller.js']
                                                      },
                                                      {
                                                        name: 'frontendDevelopersDirective',
                                                        files: ['partials/layout/contents/DEV/stakeholder/frontendDevelopers/directive.js']
                                                      },
                                                      'partials/layout/contents/DEV/stakeholder/frontendDevelopers/index.css'])
                                          .then(
                                                  function() {
                                                    $scope.contentWrapper = "partials/layout/contents/DEV/stakeholder/frontendDevelopers/";
                                                  }, function(e) {
                                                    console.log(e);
                                                  });
                                };
                                $scope.systemEngineers = function() {
                                  $ocLazyLoad
                                          .load(
                                                  [
                                                      {
                                                        name: 'systemEngineersService',
                                                        files: ['partials/layout/contents/DEV/stakeholder/systemEngineers/service.js']
                                                      },
                                                      {
                                                        name: 'systemEngineersController',
                                                        files: ['partials/layout/contents/DEV/stakeholder/systemEngineers/controller.js']
                                                      },
                                                      {
                                                        name: 'systemEngineersDirective',
                                                        files: ['partials/layout/contents/DEV/stakeholder/systemEngineers/directive.js']
                                                      },
                                                      'partials/layout/contents/DEV/stakeholder/systemEngineers/index.css'])
                                          .then(
                                                  function() {
                                                    $scope.contentWrapper = "partials/layout/contents/DEV/stakeholder/systemEngineers/";
                                                  }, function(e) {
                                                    console.log(e);
                                                  });
                                };
                                $scope.projectManagers = function() {
                                  $ocLazyLoad
                                          .load(
                                                  ['partials/layout/contents/DEV/stakeholder/projectManagers/index.css'])
                                          .then(
                                                  function() {
                                                    $scope.contentWrapper = "partials/layout/contents/DEV/stakeholder/projectManagers/";
                                                  }, function(e) {
                                                    console.log(e);
                                                  });
                                };

                                // 로그인
                                $scope.showSingIn = false;
                                $scope.signIn = function() {
                                  $scope.showSingIn = !$scope.showSingIn;
                                };
                          }]);// indexModule.controller

          rivalWarIndexModule
                  .directive(
                          'ngTranslateLanguageSelect',
                          function(rivalWarLayoutService) {
                            'use strict';

                            return {
                              restrict: 'A',
                              replace: true,
                              template: ''
                                      + '<div ng-if="visible" style="margin-top : 7px;margin-right : 6px;">'
                                      + '<select class="form-control select2" ng-model="currentLocaleDisplayName"'
                                      + 'ng-options="localesDisplayName for localesDisplayName in localesDisplayNames" ng-change="changeLanguage(currentLocaleDisplayName)">'
                                      + '</select>' + '</div>'
                                      + '<!-- /.form-group -->',

                              controller: function($scope) {
                                $scope.currentLocaleDisplayName = rivalWarLayoutService
                                        .getLocaleDisplayName();
                                $scope.localesDisplayNames = rivalWarLayoutService
                                        .getLocalesDisplayNames();
                                $scope.visible = $scope.localesDisplayNames
                                        && $scope.localesDisplayNames.length > 1;

                                $scope.changeLanguage = function(locale) {
                                  rivalWarLayoutService
                                          .setLocaleByDisplayName(locale);
                                };
                              }
                            };
                          });

          rivalWarIndexModule.controller('rivalListController', ['$rootScope','$scope', '$ocLazyLoad', 'rivalWarLayoutService',
            function ($rootScope, $scope, $ocLazyLoad, rivalWarLayoutService) {

              $scope.timer = function () {

              };

              $scope.warList = [
                {category : "스마트폰", dDay : "3일 22시간 31분", con : "아이폰 vs 삼성"},
                {category : "카메라", dDay : "6일 11시간 47분", con : 'SONY vs Cannon'},
                {category : "히어로", dDay : "1일 19시간 38분", con : '슈퍼맨 vs 배트맨'},
                {category : "탄산음료", dDay : "4일 01시간 20분" ,con : '코카콜라 vs 펩시'},
                {category : "노트북", dDay : "5일 07시간 17분" , con : '맥북프로 vs 서피스5'},
                {category : "음식", dDay : "2일 23시간 51분", con : '맥도날드 vs 버거킹'},
                {category : "신발", dDay : "3일 03시간 01분", con :'나이키 vs 아디다스'}
              ];


              $ocLazyLoad.load( ['partials/common/js/jstree-v.pre1.0/_lib/jquery.cookie.js'])
              .then(function() {
                var $rivalListOuterWrap = $('.rivalList-outerWrap'),
                     $rivalList = $('.rivalList-content li'),
                     idx = 0;

                var relList = setInterval(function () {
                  movement($rivalList, idx, 0, "-100%");
                  idx +=1;
                  movement($rivalList, idx, "100%", 0);
                },5000);

                $rivalListOuterWrap.on({
                  mouseenter : function(){
                    clearInterval(relList)
                  },
                  mouseleave : function () {
                    relList = setInterval(function () {
                      movement($rivalList, idx, 0, "-100%");
                      idx +=1;
                      movement($rivalList, idx, "100%", 0);
                    },3000);
                  }
                });

                function movement(el, index, s, e) {
                  var leng = el.length;
                  el.eq(index).addClass('on').siblings().removeClass('on');
                  el.eq(index).css({display:'block', top:s}).stop().animate({top:e},800);
                  if(index == leng){
                    idx = 0;
                    movement(el, idx, "100%", 0)
                  }
                }
              });
          }]);

          rivalWarIndexModule.controller('headerController', ['$scope', '$window', '$ocLazyLoad', 'rivalWarLayoutService',
            function ($scope, $window, $ocLazyLoad, rivalWarLayoutService) {
              var flag = true;

              $scope.testWid = $window.innerWidth;

              angular.element($window).bind('resize', function () {
                $scope.testWid = $window.innerWidth;
                if($scope.testWid <= 768){
                  flag = true;
                  $('body').removeClass('sidebar-open');
                }else if($scope.testWid >= 768){
                  //flag = true;
                  //$('body').removeClass('.sidebar-open');
                  $('.blind').fadeTo(500, 0, function () {
                    $(this).remove();
                  });
                }
              });

              $scope.asideToggle = function (e) {
                var $body = $('body'),
                    blind = '<div class="blind"></div>';
                if($scope.testWid <= 767){
                  if(flag === true){
                    flag = false;
                    $body.append(blind).find('.blind').fadeTo(500, 0.5);
                  }else if(flag === false){
                    flag = true;
                    $('.blind').fadeTo(500, 0, function () {
                      $(this).remove();
                    })
                  }
                }else if($scope.testWid >=768){

                }
              };
              $ocLazyLoad.load( ['partials/common/js/jstree-v.pre1.0/_lib/jquery.cookie.js'])
                .then(function() {

                });
            }]);

          rivalWarIndexModule.controller('rivalWarAsideController', ['$scope', '$ocLazyLoad', 'rivalWarLayoutService',
            function ($scope, $ocLazyLoad, rivalWarLayoutService) {
              console.log('rivalWarAsideController');
            }]);

          rivalWarIndexModule.controller('rivalWarContentsController', ['$scope',
              '$ocLazyLoad', '$stateParams', 'rivalWarLayoutService',
              function($scope, $ocLazyLoad, $stateParams, rivalWarLayoutService) {
        	  	/* 컨텐츠 영역 */
                console.log("----" + $stateParams.subModule + "----");
                
                angular.element(document).ready(function() {
                  if(typeof $stateParams.subModule != 'undefined'){
                	console.log($stateParams.subModule);
                	$scope.subName = $stateParams.subModule;
                    $scope.$emit('emitSubModule',  {message: $scope.subName});
                  }
                });
                
                $('#carousel-example-generic').carousel({
                  interval: 2000
                });
                
                /* 토글 슬라이드 이벤트 */
                	$('.item-table li').on('click',function(){
                		var viewWidth = $('.rival-content').outerWidth();
                		if(viewWidth < 460){
	                		if($(this).find('.fa').hasClass('fa-plus')){
	                			$(this).find('.fa').attr('class','fa fa-minus');
	                			$(this).find('.dl-box').slideDown();
	                		}else{
	                			$(this).find('.fa').attr('class','fa fa-plus');
	                			$(this).find('.dl-box').slideUp();
	                		}
                		}
                	});
                /* 데이터 적용 */
                	
                	
              }]);// rivalWarContentsController.controller

          rivalWarIndexModule.directive('signInModal', function () {
            return {
              restrict : "A",
              replace:true,
              transclude:true,
              templateUrl:'./partials/layout/contents/rivalWar/signIn.html',
              scope:true,
              link: function postLink(scope, element, attrs) {
                scope.$watch(attrs.visible, function(value){
                  if(value == true)
                    $(element).modal('show');
                  else
                    $(element).modal('hide');
                });
                $(element).on('shown.bs.modal', function(){
                  scope.$apply(function(){
                    scope.$parent[attrs.visible] = true;
                  });
                });
                $(element).on('hidden.bs.modal', function(){
                  scope.$apply(function(){
                    scope.$parent[attrs.visible] = false;
                  });
                });
              }
            }
          });

        }); // define end
