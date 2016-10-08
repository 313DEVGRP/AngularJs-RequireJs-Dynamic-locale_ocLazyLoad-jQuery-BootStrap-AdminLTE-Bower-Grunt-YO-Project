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
									'$http',
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
										
										//데이터 받아옴
										$http({
											method: 'GET',
											url: 'partials/common/js/jstree-v.pre1.0/sampleJstree.json'
												}).then(function successCallback(response) {
													console.log(response);
												}, function errorCallback(response) {
													console.log(response);
											});
										
										//기본 스펙 이벤트
										$('.table-more-view').on('click',function(){
											$('.spec-view').css({'display':'table-row-group'});
										});
									}
							]);// strutsiBatisController.controller

		});
