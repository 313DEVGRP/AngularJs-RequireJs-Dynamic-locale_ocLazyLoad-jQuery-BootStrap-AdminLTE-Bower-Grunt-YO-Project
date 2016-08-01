'use strict';

define(
		['projectWeb'
		],
		function() {
			
			var rivalWarContentsModule = angular.module('projectWeb', ['ui.router',
					'oc.lazyLoad', 'rivalWarContentsService', 'rivalWarLayoutService'
			]);

			rivalWarContentsModule
					.controller(
							'rivalWarContentsController',
							[
									'$scope',
									'$ocLazyLoad',
									'rivalWarContentsService',
									'rivalWarLayoutService',
									function($scope, $ocLazyLoad,
											rivalWarContentsService,
											rivalWarLayoutService) {

										$ocLazyLoad
												.load(
														[
																'partials/layout/content/main.css'

														]).then(function() {
													rivalWarContentsService.fire();
													rivalWarLayoutService.fire();
												});
										//페이지 타이틀
										$scope.mainTitle = 'ravalWar';
										//상품 이름 
										$scope.firstPlayer = 'samsung';
										$scope.secondPlayer = 'iPhone';
										//스텟 리스트 정리 
										$scope.playerStatList=[
										                 { statTitle='', firstPlayer : '', secondPlayerStat : ''},
										                 { statTitle='', firstPlayer : '', secondPlayerStat : ''},
										                 { statTitle='', firstPlayer : '', secondPlayerStat : ''},
										                ];
										//
									}
							]);// strutsiBatisController.controller

		});
