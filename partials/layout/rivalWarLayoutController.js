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
          '$window',
          '$translate',
          '$interval',
          '$stateParams',
          function($scope, $ocLazyLoad, rivalWarLayoutService,
                   $rootScope, $window, $translate, $interval,
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

            $ocLazyLoad.load( ['partials/common/js/jstree-v.pre1.0/_lib/jquery.cookie.js'])
              .then(function() {
                rivalWarLayoutService.sideView();
              });
  
            $scope.winWid = $window.innerWidth;
            angular.element($window).bind('resize', function () {
              $scope.winWid = $window.innerWidth;
              if($scope.winWid >= 768){
                $scope.itemsPerPage  = 5;
              }else if($scope.winWid <= 768){
                $scope.itemsPerPage  = 3;
              }
              console.log($scope.itemsPerPage);
            });
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
              rivalWarLayoutService.movement($rivalList, idx, 0, "-100%");
              idx +=1;
              if(idx === $rivalList.length) idx = 0;
              rivalWarLayoutService.movement($rivalList, idx, "100%", 0);
            },4000);

            // $rivalListOuterWrap.on({
            //   mouseenter : function(){
            //     clearInterval(relList)
            //   },
            //   mouseleave : function () {
            //     relList = setInterval(function () {
            //       rivalWarLayoutService.movement($rivalList, idx, 0, "-100%");
            //       idx +=1;
            //       rivalWarLayoutService.movement($rivalList, idx, "100%", 0);
            //     },3000);
            //   }
            // });
          });
      }]);

    rivalWarIndexModule.controller('headerController', ['$scope', '$window', '$ocLazyLoad', 'rivalWarLayoutService',
      function ($scope, $window, $ocLazyLoad, rivalWarLayoutService) {
        var flag = true;

        $scope.winWid = $window.innerWidth;

        angular.element($window).bind('resize', function () {
          $scope.testWid = $window.innerWidth;
          if($scope.winWid <= 768){
            flag = true;
            $('body').removeClass('sidebar-open');
          }else if($scope.winWid >= 768){
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
          if($scope.winWid <= 767){
            if(flag === true){
              flag = false;
              $body.append(blind).find('.blind').fadeTo(500, 0.5);
            }else if(flag === false){
              flag = true;
              $('.blind').fadeTo(500, 0, function () {
                $(this).remove();
              })
            }
          }else if($scope.winWid >=768){

          }
        };
        $ocLazyLoad.load( ['partials/common/js/jstree-v.pre1.0/_lib/jquery.cookie.js'])
          .then(function() {

          });
      }]);

    rivalWarIndexModule.controller('rivalWarAsideController', ['$scope', '$ocLazyLoad', 'rivalWarLayoutService',
      function ($scope, $ocLazyLoad, rivalWarLayoutService) {
        console.log('rivalWarAsideController');

        $ocLazyLoad.load( ['partials/common/js/jstree-v.pre1.0/_lib/jquery.cookie.js'])
          .then(function() {
            var $repeatList = $('.repeatList > li'),
              idx = 0;

            $repeatList.eq(idx).addClass('on');

            var asideRelList = setInterval(function () {
              rivalWarLayoutService.addOn($repeatList.eq(idx));
              idx +=1;
              if(idx === $repeatList.length) idx = 0;
              console.log($repeatList.length)
              rivalWarLayoutService.addOn($repeatList.eq(idx));
            },4000);

            // $rivalListOuterWrap.on({
            //   mouseenter : function(){
            //     clearInterval(relList)
            //   },
            //   mouseleave : function () {
            //     relList = setInterval(function () {
            //       rivalWarLayoutService.movement($rivalList, idx, 0, "-100%");
            //       idx +=1;
            //       rivalWarLayoutService.movement($rivalList, idx, "100%", 0);
            //     },3000);
            //   }
            // });
          });
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
        $scope.warTime ='2016년 11월 4일';

        /* 댓글 */

        $scope.directChatList = [ // 원글
          {
            support : true,
            userName : "Ryan Heywood",
            userImg : "./partials/common/img/community/user1.jpg",
            userRank : "./partials/common/img/community/level1.jpg",
            date : "01월 16일 14:59",
            text : "안드로이드의 경우 사용하지 않는 앱들이 설치되어 있는데 삭제도 안되니 더 불편한거 아닌가요?"
          },
          {
            support : false,
            userName : "Ryan Heywood",
            userImg : "./partials/common/img/community/user2.jpg",
            userRank : "./partials/common/img/community/level2.jpg",
            date : "01월 16일 17:31",
            text : "아이폰 사용의 좋은 점이 분명히 있지만, 처음 사용자가 쓰기에는 어려움이 너무 많습니다."
          }
        ];
  
        $scope.chatReplyList = [ // 답글
          {
            support : true,
            userName : "Ryan Heywood",
            userImg : "./partials/common/img/community/user1.jpg",
            date : "01월 16일 14:59",
            text : "안드로이드의 경우 사용하지 않는 앱들이 설치되어 있는데 삭제도 안되니 더 불편한거 아닌가요?"
          },
          {
            support : false,
            userName : "Ryan Heywood",
            userImg : "./partials/common/img/community/user2.jpg",
            date : "01월 16일 17:31",
            text : "아이폰 사용의 좋은 점이 분명히 있지만, 처음 사용자가 쓰기에는 어려움이 너무 많습니다."
          }
        ];
        
        $scope.goReply = false;
        $scope.replyTo = false;

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
  
    rivalWarIndexModule.directive('specTable', function () {
      return {
        restrict : "E",
        replace:true,
        transclude:true,
        templateUrl:'./partials/layout/contents/rivalWar/specTable.html'
      }
    });
  
    rivalWarIndexModule.directive('specTableReverse', function () {
      return {
        restrict : "E",
        replace:true,
        transclude:true,
        templateUrl:'./partials/layout/contents/rivalWar/specTableReverse.html'
      }
    });
    
    // 비교상세스펙 - 왼쪽
    rivalWarIndexModule.controller('specCtrlLeft', function ($window, $rootScope, $scope, $filter) {
      
      // responds
      console.log("spec");
      console.log($rootScope.itemsPerPage + "spec")
      
      // init
      $scope.theme = "Galaxy 6";
      $scope.sort = {
        sortingOrder : 'progress',
        reverse : true
      };
      $scope.filteredItems = [];
      $scope.groupedItems = [];
      $scope.itemsPerPage = 5;
      $scope.currentPage = 0;
      $scope.pagedItems = [];
      $scope.gap = 5;
      $scope.items = [
        {"specTag":"tag name 1", "progress":37},
        {"specTag":"tag name 2", "progress":21},
        {"specTag":"tag name 3", "progress":29},
        {"specTag":"tag name 4", "progress":72},
        {"specTag":"tag name 5", "progress":85},
        {"specTag":"tag name 6", "progress":37},
        {"specTag":"tag name 7", "progress":97},
        {"specTag":"tag name 8", "progress":45},
        {"specTag":"tag name 9", "progress":88},
        {"specTag":"tag name 10", "progress":15},
        {"specTag":"tag name 11", "progress":18},
        {"specTag":"tag name 12", "progress":28},
        {"specTag":"tag name 13", "progress":40},
        {"specTag":"tag name 14", "progress":87},
        {"specTag":"tag name 15", "progress":38},
        {"specTag":"tag name 16", "progress":79},
        {"specTag":"tag name 17", "progress":13},
        {"specTag":"tag name 18", "progress":4},
        {"specTag":"tag name 19", "progress":21},
        {"specTag":"tag name 20", "progress":74},
        {"specTag":"tag name 21", "progress":96},
        {"specTag":"tag name 22", "progress":36},
        {"specTag":"tag name 23", "progress":33},
        {"specTag":"tag name 24", "progress":51},
        {"specTag":"tag name 25", "progress":21},
        {"specTag":"tag name 26", "progress":5},
        {"specTag":"tag name 27", "progress":47},
        {"specTag":"tag name 28", "progress":35},
        {"specTag":"tag name 29", "progress":83},
        {"specTag":"tag name 30", "progress":38},
        {"specTag":"tag name 31", "progress":90},
        {"specTag":"tag name 32", "progress":42},
        {"specTag":"tag name 33", "progress":83},
        {"specTag":"tag name 34", "progress":35},
        {"specTag":"tag name 35", "progress":26},
        {"specTag":"tag name 36", "progress":13},
        {"specTag":"tag name 37", "progress":39},
        {"specTag":"tag name 38", "progress":72},
        {"specTag":"tag name 39", "progress":83},
        {"specTag":"tag name 40", "progress":66},
        {"specTag":"tag name 41", "progress":74},
        {"specTag":"tag name 42", "progress":57},
        {"specTag":"tag name 43", "progress":58},
        {"specTag":"tag name 44", "progress":44},
        {"specTag":"tag name 45", "progress":87},
        {"specTag":"tag name 46", "progress":42},
        {"specTag":"tag name 47", "progress":48},
        {"specTag":"tag name 48", "progress":78},
        {"specTag":"tag name 49", "progress":39},
        {"specTag":"tag name 50", "progress":93}
      ];
    
      var searchMatch = function (haystack, needle) {
        if (!needle) {
          return true;
        }
        return haystack.toLowerCase().indexOf(needle.toLowerCase()) !== -1;
      };
    
      // init the filtered items
      $scope.search = function () {
        $scope.filteredItems = $filter('filter')($scope.items, function (item) {
          for(var attr in item) {
            if (searchMatch(item[attr], $scope.query))
              return true;
          }
          return false;
        });
        // take care of the sorting order
        if ($scope.sort.sortingOrder !== '') {
          $scope.filteredItems = $filter('orderBy')($scope.filteredItems, $scope.sort.sortingOrder, $scope.sort.reverse);
        }
        $scope.currentPage = 0;
        // now group by pages
        $scope.groupToPages();
      };
      
      // calculate page in place
      $scope.groupToPages = function () {
        $scope.pagedItems = [];
      
        for (var i = 0; i < $scope.filteredItems.length; i++) {
          if (i % $scope.itemsPerPage === 0) {
            $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)] = [ $scope.filteredItems[i] ];
          } else {
            $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)].push($scope.filteredItems[i]);
          }
        }
      };
    
      $scope.range = function (size,start, end) {
        var ret = [];
      
        if (size < end) {
          end = size;
          start = size-$scope.gap;
        }
        for (var i = start; i < end; i++) {
          ret.push(i);
        }
        return ret;
      };
    
      $scope.prevPage = function () {
        if ($scope.currentPage > 0) {
          $scope.currentPage--;
        }
      };
    
      $scope.nextPage = function () {
        if ($scope.currentPage < $scope.pagedItems.length - 1) {
          $scope.currentPage++;
        }
      };
    
      $scope.setPage = function () {
        $scope.currentPage = this.n;
      };
    
      // functions have been describe process the data for display
      $scope.search();
      
      
      
    });
  
    // 비교상세스펙 - 오른쪽
    rivalWarIndexModule.controller('specCtrlRight', function ($scope, $filter) {
      // init
      $scope.theme = "iPhone 6";
      $scope.sort = {
        sortingOrder : 'progress',
        reverse : true
      };
      $scope.filteredItems = [];
      $scope.groupedItems = [];
      $scope.itemsPerPage = 5;
      $scope.currentPage = 0;
      $scope.pagedItems = [];
      $scope.gap = 5;
      $scope.items = [
        {"specTag":"tag name 1", "progress":35},
        {"specTag":"tag name 2", "progress":23},
        {"specTag":"tag name 3", "progress":2},
        {"specTag":"tag name 4", "progress":7},
        {"specTag":"tag name 5", "progress":67},
        {"specTag":"tag name 6", "progress":77},
        {"specTag":"tag name 7", "progress":9},
        {"specTag":"tag name 8", "progress":15},
        {"specTag":"tag name 9", "progress":28},
        {"specTag":"tag name 10", "progress":45},
        {"specTag":"tag name 11", "progress":78},
        {"specTag":"tag name 12", "progress":88},
        {"specTag":"tag name 13", "progress":80},
        {"specTag":"tag name 14", "progress":77},
        {"specTag":"tag name 15", "progress":88},
        {"specTag":"tag name 16", "progress":99},
        {"specTag":"tag name 17", "progress":93},
        {"specTag":"tag name 18", "progress":24},
        {"specTag":"tag name 19", "progress":11},
        {"specTag":"tag name 20", "progress":44},
        {"specTag":"tag name 21", "progress":66},
        {"specTag":"tag name 22", "progress":46},
        {"specTag":"tag name 23", "progress":23},
        {"specTag":"tag name 24", "progress":11},
        {"specTag":"tag name 25", "progress":91},
        {"specTag":"tag name 26", "progress":95},
        {"specTag":"tag name 27", "progress":41},
        {"specTag":"tag name 28", "progress":39},
        {"specTag":"tag name 29", "progress":38},
        {"specTag":"tag name 30", "progress":35},
        {"specTag":"tag name 31", "progress":0},
        {"specTag":"tag name 32", "progress":1},
        {"specTag":"tag name 33", "progress":60},
        {"specTag":"tag name 34", "progress":4},
        {"specTag":"tag name 35", "progress":17},
        {"specTag":"tag name 36", "progress":33},
        {"specTag":"tag name 37", "progress":76},
        {"specTag":"tag name 38", "progress":49},
        {"specTag":"tag name 39", "progress":83},
        {"specTag":"tag name 40", "progress":96},
        {"specTag":"tag name 41", "progress":34},
        {"specTag":"tag name 42", "progress":56},
        {"specTag":"tag name 43", "progress":78},
        {"specTag":"tag name 44", "progress":24},
        {"specTag":"tag name 45", "progress":47},
        {"specTag":"tag name 46", "progress":44},
        {"specTag":"tag name 47", "progress":98},
        {"specTag":"tag name 48", "progress":8},
        {"specTag":"tag name 49", "progress":9},
        {"specTag":"tag name 50", "progress":3}
      ];
      var searchMatch = function (haystack, needle) {
        if (!needle) {
          return true;
        }
        return haystack.toLowerCase().indexOf(needle.toLowerCase()) !== -1;
      };
    
      // init the filtered items
      $scope.search = function () {
        $scope.filteredItems = $filter('filter')($scope.items, function (item) {
          for(var attr in item) {
            if (searchMatch(item[attr], $scope.query))
              return true;
          }
          return false;
        });
        // take care of the sorting order
        if ($scope.sort.sortingOrder !== '') {
          $scope.filteredItems = $filter('orderBy')($scope.filteredItems, $scope.sort.sortingOrder, $scope.sort.reverse);
        }
        $scope.currentPage = 0;
        // now group by pages
        $scope.groupToPages();
      };
    
      // calculate page in place
      $scope.groupToPages = function () {
        $scope.pagedItems = [];
      
        for (var i = 0; i < $scope.filteredItems.length; i++) {
          if (i % $scope.itemsPerPage === 0) {
            $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)] = [ $scope.filteredItems[i] ];
          } else {
            $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)].push($scope.filteredItems[i]);
          }
        }
      };
    
      $scope.range = function (size,start, end) {
        var ret = [];
      
        if (size < end) {
          end = size;
          start = size-$scope.gap;
        }
        for (var i = start; i < end; i++) {
          ret.push(i);
        }
        return ret;
      };
    
      $scope.prevPage = function () {
        if ($scope.currentPage > 0) {
          $scope.currentPage--;
        }
      };
    
      $scope.nextPage = function () {
        if ($scope.currentPage < $scope.pagedItems.length - 1) {
          $scope.currentPage++;
        }
      };
    
      $scope.setPage = function () {
        $scope.currentPage = this.n;
      };
    
      // functions have been describe process the data for display
      $scope.search();
    
    });
    

  }); // define end
