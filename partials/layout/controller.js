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
				        $.AdminLTE.layout.activate();
				    }else if(file === 'partials/layout/footer/') {
				        $.AdminLTE.layout.activate();
				    }else if(file === 'partials/layout/sidebar/') {
				    	console.log(file);
				    };
				  });
				
				$scope.loadBootstrap = function() {
				    // use events to know when the files are loaded
				    var unbind = $scope.$on('ocLazyLoad.fileLoaded', function(e, file) {
				      if(file === 'bower_components/bootstrap/dist/css/bootstrap.css') {
				        $scope.bootstrapLoaded = true;
				        unbind();
				      }
				    });
				  };
				
				$scope.strutsiBatis = function() {
					$ocLazyLoad.load([{
				        name: 'strutsiBatisController',
				        files: ['partials/layout/contents/strutsiBatis/controller.js']
				    }]).then(function() {
						$scope.contentWrapper = "partials/layout/contents/strutsiBatis/";
					}, function(e) {
						console.log(e);
					});
				}
		}]);//indexModule.controller
	
});
