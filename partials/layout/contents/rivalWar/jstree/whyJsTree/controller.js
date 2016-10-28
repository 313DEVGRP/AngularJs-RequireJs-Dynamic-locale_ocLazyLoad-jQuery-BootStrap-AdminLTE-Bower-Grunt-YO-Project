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

                    $scope.workList = [
                      {num : "1", name: "html"},
                      {num : "2", name: "css"},
                      {num : "3", name: "js"},
                      {num : "4", name: "Angular"}
                    ];

										$ocLazyLoad
												.load(
														['partials/common/js/jstree-v.pre1.0/_lib/jquery.cookie.js'

														]).then(function() {
													whyJsTreeService.fire();
													devLayoutService.fire();

                          console.log("test");
                          console.log($('.text-list'));
                          console.log($('.text-list li'));
                          console.log($('.text-list li p'));
                          console.log($('.check-box'));
                          console.log($('.check-01')); // 못찾음
                          console.log($('.check-02')); // 못찾음
												});

									}
							]);// strutsiBatisController.controller

		});
