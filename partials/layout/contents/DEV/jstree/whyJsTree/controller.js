'use strict';

define(
		['projectWeb'
		],
		function() {

			var whyJsTreeModule = angular.module('projectWeb', ['ui.router',
					'oc.lazyLoad', 'whyJsTreeService', 'devLayoutService'
			]);

			whyJsTreeModule.controller('whyJsTreeHeaderController', [
					'$scope',
					'$rootScope',
					'$ocLazyLoad',
					'whyJsTreeService',
					'devLayoutService',
					function($scope, $rootScope, $ocLazyLoad,
							whyJsTreeService, devLayoutService) {

						$scope.broadcastGoToHome = function() {
							$rootScope.$broadcast('goToHome');
						};

					}
			]);// strutsiBatisHeaderController.controller

			whyJsTreeModule
					.controller(
							'whyJsTreeController',
							[
									'$scope',
									'$ocLazyLoad',
									'whyJsTreeService',
									'devLayoutService',
									function($scope, $ocLazyLoad,
											whyJsTreeService, devLayoutService) {

										$ocLazyLoad
												.load(
														['partials/common/js/jstree-v.pre1.0/_lib/jquery.cookie.js'

														]).then(function() {
													whyJsTreeService.fire();
													devLayoutService.fire();
												});

									}
							]);// strutsiBatisController.controller

		});
