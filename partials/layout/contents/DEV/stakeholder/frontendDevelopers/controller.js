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
																'partials/layout/contents/DEV/stakeholder/frontendDevelopers/plugin/jquery.mCustomScrollbar.min.js',
																'partials/layout/contents/DEV/stakeholder/frontendDevelopers/plugin/jquery.mousewheel.min.js',
																'partials/layout/contents/DEV/stakeholder/frontendDevelopers/plugin/jcarousel.min.js',
																'partials/layout/contents/DEV/stakeholder/frontendDevelopers/plugin/jquery.usquare.js',
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


                    $scope.ldm={
                      photo:'LDM.jpeg',
                      names:'이동민',
                      job:'Java Developer / Architecture',
                      mail:'mailto:313@313.co.kr'
                    };

                    $scope.lcy={
                      photo:'LCY.jpg',
                      names:'이창용',
                      job:'Java Developer / Architecture',
                      mail:'mailto:lcy9002@naver.com'
                    };
                    $scope.esm={
                      photo:'ESM.jpg',
                      names:'엄선미',
                      job:'Java Developer / Architecture',
                      mail:'mailto:vsmumv@gmail.com'
                    };
                    $scope.ybt={
                      photo:'YBT.jpg',
                      names:'윤봉태',
                      job:'Java Developer / Architecture',
                      mail:'mailto:ybt8901@naver.com'
                    };

									}

							]);// frontendDevelopersController.controller

		});
