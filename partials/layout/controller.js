'use strict';

define(['projectWeb'], function () {
	
	var indexModule = angular.module('projectWeb', ['ui.router', 'oc.lazyLoad']);
	
	indexModule.controller('indexController', ['$scope', '$ocLazyLoad', 
	        function($scope, $ocLazyLoad) {
		
				$scope.mainHeader = 'partials/header/';
				$scope.mainSidebar = 'partials/aside/';
				$scope.contentWrapper = 'partials/contents/';
				$scope.mainFooter = 'partials/footer/';
				$scope.controlSidebar = 'partials/sidebar/';
		
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
				        name: 'lazymodule',
				        files: ['lazymodule.js']
				    }]);
				};
		}]);//indexModule.controller
	
	indexModule.bootstrap = function () {
   	    angular.bootstrap(document, ['indexModule']);
   	};

   	return indexModule;
	
});
