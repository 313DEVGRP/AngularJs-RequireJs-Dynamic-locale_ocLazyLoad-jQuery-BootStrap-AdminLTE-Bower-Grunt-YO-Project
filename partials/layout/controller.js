'use strict';

define(['projectWeb'], function () {
	
	var indexModule = angular.module('projectWeb', ['ui.router', 'oc.lazyLoad']);
	
	indexModule.controller('indexController', ['$scope', '$ocLazyLoad', 
	        function($scope, $ocLazyLoad) {
		
				$scope.mainHeader = 'partials/layout/header/';
				$scope.mainSidebar = 'partials/layout/aside/';
				$scope.contentWrapper = 'partials/layout/contents/';
				$scope.mainFooter = 'partials/layout/footer/';
				$scope.controlSidebar = 'partials/layout/sidebar/';
		
				$ocLazyLoad.load({
				  reconfig: true,
				  cache: false,
				  files: [
							'AdminLTE-2.3.3/dist/js/app.min',
							'AdminLTE-2.3.3/dist/js/demo'
				         ]
				});
				
				$scope.strutsiBatis = function() {
					$ocLazyLoad.load([{
				        name: 'strutsiBatisController',
				        files: ['partials/layout/aside/strutsiBatis/controller.js']
				    }]).then(function() {
						$scope.contentWrapper = "partials/layout/aside/strutsiBatis/";
					}, function(e) {
						console.log(e);
					});
				}
		}]);//indexModule.controller
	
});
