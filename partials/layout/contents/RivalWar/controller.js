'use strict';

define(
		['projectWeb'
		],
		function() {
			
			var rivalWarContentsModule = angular.module('projectWeb', ['ui.router',
					'oc.lazyLoad', 'rivalWarLayoutService'
			]);

			rivalWarContentsModule
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
																'partials/layout/content/RivalWar/main.js'

														]).then(function() {
													rivalWarLayoutService.fire();
												});
										//페이지 타이틀
										$scope.mainTitle = 'ravalWar';
										//상품 이름 
										$scope.firstPlayer = 'samsung';
										$scope.secondPlayer = 'iPhone';
									}
							]);// strutsiBatisController.controller

		});
