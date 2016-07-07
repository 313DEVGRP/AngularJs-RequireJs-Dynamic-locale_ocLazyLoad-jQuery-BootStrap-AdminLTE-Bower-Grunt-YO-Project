'use strict';

define(
		[ 'projectWeb' ],
		function() {

			var indexModule = angular.module('projectWeb', [ 'ui.router',
					'oc.lazyLoad', 'layoutService' ]);

			indexModule
					.controller(
							'layoutController',
							[
									'$scope',
									'$ocLazyLoad',
									'layoutService',
									function($scope, $ocLazyLoad, layoutService) {

										$scope.mainHeader = 'partials/layout/header/';
										$scope.mainSidebar = 'partials/layout/aside/';
										$scope.contentWrapper = 'partials/layout/contents/';
										$scope.mainFooter = 'partials/layout/footer/';
										$scope.controlSidebar = 'partials/layout/sidebar/';

										$scope
												.$on(
														'$includeContentLoaded',
														function(event, file) {
															if (file === 'partials/layout/header/') {
																console
																		.log(file);
															} else if (file === 'partials/layout/aside/') {
																layoutService
																		.fire();
															} else if (file === 'partials/layout/contents/') {
																$ocLazyLoad
																		.load('partials/layout/contents/index.css');
																layoutService
																		.fire();
															} else if (file === 'partials/layout/footer/') {
																layoutService
																		.fire();
															} else if (file === 'partials/layout/sidebar/') {
																console
																		.log(file);
															}
															;
														});

										$scope.strutsiBatis = function() {
											$ocLazyLoad
													.load(
															[
																	{
																		name : 'strutsiBatisController',
																		files : [ 'partials/layout/contents/strutsiBatis/controller.js' ]
																	},
																	'partials/layout/contents/strutsiBatis/index.css' ])
													.then(
															function() {
																$scope.contentWrapper = "partials/layout/contents/strutsiBatis/";
															}, function(e) {
																console.log(e);
															});
										};

										$scope.springMyBatis = function() {
											$ocLazyLoad
													.load(
															[
																	{
																		name : 'springMyBatisService',
																		files : [ 'partials/layout/contents/springMyBatis/service.js' ]
																	},
																	{
																		name : 'springMyBatisController',
																		files : [ 'partials/layout/contents/springMyBatis/controller.js' ]
																	},
																	'partials/layout/contents/springMyBatis/index.css' ])
													.then(
															function() {
																$scope.contentWrapper = "partials/layout/contents/springMyBatis/";
															}, function(e) {
																console.log(e);
															});
										};

										$scope.springHibernate = function() {
											$ocLazyLoad
													.load(
															[
																	{
																		name : 'springHibernateService',
																		files : [ 'partials/layout/contents/springHibernate/service.js' ]
																	},
																	{
																		name : 'springHibernateController',
																		files : [ 'partials/layout/contents/springHibernate/controller.js' ]
																	},
																	'partials/layout/contents/springHibernate/index.css' ])
													.then(
															function() {
																$scope.contentWrapper = "partials/layout/contents/springHibernate/";
															}, function(e) {
																console.log(e);
															});
										};

										$scope.dwr = function() {
											$ocLazyLoad
													.load(
															[
																	{
																		name : 'dwrService',
																		files : [ 'partials/layout/contents/DWR/service.js' ]
																	},
																	{
																		name : 'dwrController',
																		files : [ 'partials/layout/contents/DWR/controller.js' ]
																	},
																	'partials/layout/contents/DWR/index.css' ])
													.then(
															function() {
																$scope.contentWrapper = "partials/layout/contents/DWR/";
															}, function(e) {
																console.log(e);
															});
										};

										$scope.lucene = function() {
											$ocLazyLoad
													.load(
															[
																	{
																		name : 'luceneService',
																		files : [ 'partials/layout/contents/Lucene/service.js' ]
																	},
																	{
																		name : 'luceneController',
																		files : [ 'partials/layout/contents/Lucene/controller.js' ]
																	},
																	'partials/layout/contents/Lucene/index.css' ])
													.then(
															function() {
																$scope.contentWrapper = "partials/layout/contents/Lucene/";
															}, function(e) {
																console.log(e);
															});
										};

										$scope.hadoop = function() {
											$ocLazyLoad
													.load(
															[
																	{
																		name : 'hadoopService',
																		files : [ 'partials/layout/contents/Hadoop/service.js' ]
																	},
																	{
																		name : 'hadoopController',
																		files : [ 'partials/layout/contents/Hadoop/controller.js' ]
																	},
																	'partials/layout/contents/Hadoop/index.css' ])
													.then(
															function() {
																$scope.contentWrapper = "partials/layout/contents/Hadoop/";
															}, function(e) {
																console.log(e);
															});
										};

										$scope.machineLearning = function() {
											$ocLazyLoad
													.load(
															[
																	{
																		name : 'machineLearningService',
																		files : [ 'partials/layout/contents/MachineLearning/service.js' ]
																	},
																	{
																		name : 'machineLearningController',
																		files : [ 'partials/layout/contents/MachineLearning/controller.js' ]
																	},
																	'partials/layout/contents/MachineLearning/index.css' ])
													.then(
															function() {
																$scope.contentWrapper = "partials/layout/contents/MachineLearning/";
															}, function(e) {
																console.log(e);
															});
										};

										$scope.confluence = function() {
											$ocLazyLoad
													.load(
															[
																	{
																		name : 'confluenceService',
																		files : [ 'partials/layout/contents/confluence/service.js' ]
																	},
																	{
																		name : 'confluenceController',
																		files : [ 'partials/layout/contents/confluence/controller.js' ]
																	},
																	'partials/layout/contents/confluence/index.css' ])
													.then(
															function() {
																$scope.contentWrapper = "partials/layout/contents/confluence/";
															}, function(e) {
																console.log(e);
															});
										};
										
										$scope.jira = function() {
											$ocLazyLoad
													.load(
															[
																	{
																		name : 'jiraService',
																		files : [ 'partials/layout/contents/jira/service.js' ]
																	},
																	{
																		name : 'jiraController',
																		files : [ 'partials/layout/contents/jira/controller.js' ]
																	},
																	'partials/layout/contents/jira/index.css' ])
													.then(
															function() {
																$scope.contentWrapper = "partials/layout/contents/jira/";
															}, function(e) {
																console.log(e);
															});
										};
										
										$scope.github = function() {
											$ocLazyLoad
													.load(
															[
																	{
																		name : 'githubService',
																		files : [ 'partials/layout/contents/github/service.js' ]
																	},
																	{
																		name : 'githubController',
																		files : [ 'partials/layout/contents/github/controller.js' ]
																	},
																	'partials/layout/contents/github/index.css' ])
													.then(
															function() {
																$scope.contentWrapper = "partials/layout/contents/github/";
															}, function(e) {
																console.log(e);
															});
										};
										
										$scope.fisheyeCrucible = function() {
											$ocLazyLoad
													.load(
															[
																	{
																		name : 'fisheyeCrucibleService',
																		files : [ 'partials/layout/contents/fisheyeCrucible/service.js' ]
																	},
																	{
																		name : 'fisheyeCrucibleController',
																		files : [ 'partials/layout/contents/fisheyeCrucible/controller.js' ]
																	},
																	'partials/layout/contents/fisheyeCrucible/index.css' ])
													.then(
															function() {
																$scope.contentWrapper = "partials/layout/contents/fisheyeCrucible/";
															}, function(e) {
																console.log(e);
															});
										};
										
										$scope.nas = function() {
											$ocLazyLoad
													.load(
															[
																	{
																		name : 'nasService',
																		files : [ 'partials/layout/contents/nas/service.js' ]
																	},
																	{
																		name : 'nasController',
																		files : [ 'partials/layout/contents/nas/controller.js' ]
																	},
																	'partials/layout/contents/nas/index.css' ])
													.then(
															function() {
																$scope.contentWrapper = "partials/layout/contents/nas/";
															}, function(e) {
																console.log(e);
															});
										};
										
										$scope.nexus = function() {
											$ocLazyLoad
													.load(
															[
																	{
																		name : 'nexusService',
																		files : [ 'partials/layout/contents/nexus/service.js' ]
																	},
																	{
																		name : 'nexusController',
																		files : [ 'partials/layout/contents/nexus/controller.js' ]
																	},
																	'partials/layout/contents/nexus/index.css' ])
													.then(
															function() {
																$scope.contentWrapper = "partials/layout/contents/nexus/";
															}, function(e) {
																console.log(e);
															});
										};
										
										$scope.bamboo = function() {
											$ocLazyLoad
													.load(
															[
																	{
																		name : 'bambooService',
																		files : [ 'partials/layout/contents/bamboo/service.js' ]
																	},
																	{
																		name : 'bambooController',
																		files : [ 'partials/layout/contents/bamboo/controller.js' ]
																	},
																	'partials/layout/contents/bamboo/index.css' ])
													.then(
															function() {
																$scope.contentWrapper = "partials/layout/contents/bamboo/";
															}, function(e) {
																console.log(e);
															});
										};
										
										$scope.hudson = function() {
											$ocLazyLoad
													.load(
															[
																	{
																		name : 'hudsonService',
																		files : [ 'partials/layout/contents/hudson/service.js' ]
																	},
																	{
																		name : 'hudsonController',
																		files : [ 'partials/layout/contents/hudson/controller.js' ]
																	},
																	'partials/layout/contents/hudson/index.css' ])
													.then(
															function() {
																$scope.contentWrapper = "partials/layout/contents/hudson/";
															}, function(e) {
																console.log(e);
															});
										};
										
										$scope.maven = function() {
											$ocLazyLoad
													.load(
															[
																	{
																		name : 'mavenService',
																		files : [ 'partials/layout/contents/maven/service.js' ]
																	},
																	{
																		name : 'mavenController',
																		files : [ 'partials/layout/contents/maven/controller.js' ]
																	},
																	'partials/layout/contents/maven/index.css' ])
													.then(
															function() {
																$scope.contentWrapper = "partials/layout/contents/maven/";
															}, function(e) {
																console.log(e);
															});
										};
										
										$scope.sonar = function() {
											$ocLazyLoad
													.load(
															[
																	{
																		name : 'sonarService',
																		files : [ 'partials/layout/contents/sonar/service.js' ]
																	},
																	{
																		name : 'sonarController',
																		files : [ 'partials/layout/contents/sonar/controller.js' ]
																	},
																	'partials/layout/contents/sonar/index.css' ])
													.then(
															function() {
																$scope.contentWrapper = "partials/layout/contents/sonar/";
															}, function(e) {
																console.log(e);
															});
										};
										
										$scope.google = function() {
											$ocLazyLoad
													.load(
															[
																	{
																		name : 'googleService',
																		files : [ 'partials/layout/contents/google/service.js' ]
																	},
																	{
																		name : 'googleController',
																		files : [ 'partials/layout/contents/google/controller.js' ]
																	},
																	'partials/layout/contents/google/index.css' ])
													.then(
															function() {
																$scope.contentWrapper = "partials/layout/contents/google/";
															}, function(e) {
																console.log(e);
															});
										};
										
										$scope.naver = function() {
											$ocLazyLoad
													.load(
															[
																	{
																		name : 'naverService',
																		files : [ 'partials/layout/contents/naver/service.js' ]
																	},
																	{
																		name : 'naverController',
																		files : [ 'partials/layout/contents/naver/controller.js' ]
																	},
																	'partials/layout/contents/naver/index.css' ])
													.then(
															function() {
																$scope.contentWrapper = "partials/layout/contents/naver/";
															}, function(e) {
																console.log(e);
															});
										};
										
										$scope.backendDevelopers = function() {
											$ocLazyLoad
													.load(
															[
																	{
																		name : 'backendDevelopersService',
																		files : [ 'partials/layout/contents/stakeholder/backendDevelopers/service.js' ]
																	},
																	{
																		name : 'backendDevelopersController',
																		files : [ 'partials/layout/contents/stakeholder/backendDevelopers/controller.js' ]
																	},
																	'partials/layout/contents/stakeholder/backendDevelopers/index.css'])
													.then(
															function() {
																$scope.contentWrapper = "partials/layout/contents/stakeholder/backendDevelopers/";
															}, function(e) {
																console.log(e);
															});
										};
									} ]);// indexModule.controller

		});