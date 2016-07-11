'use strict';

define(
		[ 'projectWeb' ],
		function() {

			var rivalWarModule = angular.module('projectWeb', [ 'ui.router',
					'oc.lazyLoad', 'rivalWarLayoutService' ]);

			rivalWarModule
					.controller(
							'rivalWarLayoutController',
							[
									'$scope',
									'$ocLazyLoad',
									'rivalWarLayoutService',
									function($scope, $ocLazyLoad, rivalWarlayoutService) {
										console.log('rivalWarLayoutController');
									} ]);// indexModule.controller

		});