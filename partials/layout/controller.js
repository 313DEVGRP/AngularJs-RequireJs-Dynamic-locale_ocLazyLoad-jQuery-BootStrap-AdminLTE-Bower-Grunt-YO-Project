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
		
				$scope.$on('$includeContentLoaded', function(event, file) {
					if(file === 'partials/layout/header/') {
						console.log(file);
				    }else if(file === 'partials/layout/aside/') {
				        $.AdminLTE.layout.activate();
				    }else if(file === 'partials/layout/contents/') {
				    	$ocLazyLoad.load('partials/layout/contents/index.css');
				        $.AdminLTE.layout.activate();
				    }else if(file === 'partials/layout/footer/') {
				        $.AdminLTE.layout.activate();
				    }else if(file === 'partials/layout/sidebar/') {
				    	console.log(file);
				    };
				  });
				
				$scope.strutsiBatis = function() {
					$ocLazyLoad.load([{
				        name: 'strutsiBatisController',
				        files: ['partials/layout/contents/strutsiBatis/controller.js']
				    },'partials/layout/contents/strutsiBatis/index.css']).then(function() {
						$scope.contentWrapper = "partials/layout/contents/strutsiBatis/";
					}, function(e) {
						console.log(e);
					});
				}
		}]);//indexModule.controller
	
});
