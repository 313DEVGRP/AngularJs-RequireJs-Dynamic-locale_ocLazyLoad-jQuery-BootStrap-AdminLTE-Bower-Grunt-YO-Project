'use strict';

define(
		['projectWeb'
		],
		function() {

			var frontendDevelopersModule = angular.module('projectWeb', [
					'ui.router', 'oc.lazyLoad', 'frontendDevelopersService',
					'devLayoutService'
			]);

			frontendDevelopersModule
					.controller(
							'frontendDevelopersController',
							[
									'$scope',
									'$ocLazyLoad',
									'frontendDevelopersService',
									'devLayoutService',
									function($scope, $ocLazyLoad,
											frontendDevelopersService,
											devLayoutService) {

										$ocLazyLoad
												.load(
														[
																'partials/layout/contents/DEV/stakeholder/frontendDevelopers/jquery.mCustomScrollbar.min.js',
																'partials/layout/contents/DEV/stakeholder/frontendDevelopers/jquery.mousewheel.min.js',
																'partials/layout/contents/DEV/stakeholder/frontendDevelopers/jcarousel.min.js',
																'partials/layout/contents/DEV/stakeholder/frontendDevelopers/jquery.usquare.js'
														])
												.then(
														function() {
															frontendDevelopersService
																	.fire();
															devLayoutService
																	.fire();
															frontendDevelopersService
																	.jcarousel();
															frontendDevelopersService
																	.uSquare();
															frontendDevelopersService
																	.customScroll();
														});

									}
							]);// frontendDevelopersController.controller

		});
