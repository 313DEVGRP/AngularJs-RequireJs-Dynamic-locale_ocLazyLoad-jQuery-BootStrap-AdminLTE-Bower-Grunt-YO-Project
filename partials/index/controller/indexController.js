'use strict';

define(['projectWeb'], function () {
	
	var indexModule = angular.module('projectWeb', ['ui.router', 'oc.lazyLoad']);
	
	indexModule.controller('indexController', ['$scope', '$ocLazyLoad', 
	        function($scope, $ocLazyLoad) {
		
				$scope.mainHeader = 'partials/index/header.html';
				$scope.mainSidebar = 'partials/index/aside.html';
				$scope.contentWrapper = 'partials/index/contents.html';
				$scope.mainFooter = 'partials/index/footer.html';
				$scope.controlSidebar = 'partials/index/sidebar.html';
		
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
				    }]).then(function() {
						$scope.contentWrapper = "partials/grid.html";
					}, function(e) {
						console.log(e);
					});
				}
		}]);//indexModule.controller
	
	indexModule.bootstrap = function () {
   	    angular.bootstrap(document, ['indexModule']);
   	};

   	return indexModule;
	
});
