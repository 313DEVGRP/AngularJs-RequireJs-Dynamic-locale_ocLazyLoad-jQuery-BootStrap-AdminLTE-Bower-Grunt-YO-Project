'use strict';

define(['projectWeb'], function () {

	var indexModule = angular.module('projectWeb', ['ui.router', 'oc.lazyLoad', 'layoutService']);

	indexModule.controller('layoutController', ['$scope', '$ocLazyLoad', 'layoutService',
	        function($scope, $ocLazyLoad, layoutService) {

				$scope.mainHeader = 'partials/layout/header/';
				$scope.mainSidebar = 'partials/layout/aside/';
				$scope.contentWrapper = 'partials/layout/contents/';
				$scope.mainFooter = 'partials/layout/footer/';
				$scope.controlSidebar = 'partials/layout/sidebar/';

				$scope.$on('$includeContentLoaded', function(event, file) {
					if(file === 'partials/layout/header/') {
						console.log(file);
				    }else if(file === 'partials/layout/aside/') {
				    	layoutService.fire();
				    }else if(file === 'partials/layout/contents/') {
				    	$ocLazyLoad.load('partials/layout/contents/index.css');
				    	layoutService.fire();
				    }else if(file === 'partials/layout/footer/') {
				    	layoutService.fire();
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
				};
				
				$scope.springMyBatis = function() {
					$ocLazyLoad.load([{
				        name: 'springMyBatisService',
				        files: ['partials/layout/contents/springMyBatis/service.js']
				    },{
				        name: 'springMyBatisController',
				        files: ['partials/layout/contents/springMyBatis/controller.js']
				    },'partials/layout/contents/springMyBatis/index.css']).then(function() {
						$scope.contentWrapper = "partials/layout/contents/springMyBatis/";
					}, function(e) {
						console.log(e);
					});
				};
				
				$scope.springHibernate = function() {
					$ocLazyLoad.load([{
				        name: 'springHibernateService',
				        files: ['partials/layout/contents/springHibernate/service.js']
				    },{
				        name: 'springHibernateController',
				        files: ['partials/layout/contents/springHibernate/controller.js']
				    },'partials/layout/contents/springHibernate/index.css']).then(function() {
						$scope.contentWrapper = "partials/layout/contents/springHibernate/";
					}, function(e) {
						console.log(e);
					});
				};
				
				$scope.dwr = function() {
					$ocLazyLoad.load([{
				        name: 'dwrService',
				        files: ['partials/layout/contents/DWR/service.js']
				    },{
				        name: 'dwrController',
				        files: ['partials/layout/contents/DWR/controller.js']
				    },'partials/layout/contents/DWR/index.css']).then(function() {
						$scope.contentWrapper = "partials/layout/contents/DWR/";
					}, function(e) {
						console.log(e);
					});
				};
				
				$scope.lucene = function() {
					$ocLazyLoad.load([{
				        name: 'luceneService',
				        files: ['partials/layout/contents/Lucene/service.js']
				    },{
				        name: 'luceneController',
				        files: ['partials/layout/contents/Lucene/controller.js']
				    },'partials/layout/contents/Lucene/index.css']).then(function() {
						$scope.contentWrapper = "partials/layout/contents/Lucene/";
					}, function(e) {
						console.log(e);
					});
				};
				
				$scope.hadoop = function() {
					$ocLazyLoad.load([{
				        name: 'hadoopService',
				        files: ['partials/layout/contents/Hadoop/service.js']
				    },{
				        name: 'hadoopController',
				        files: ['partials/layout/contents/Hadoop/controller.js']
				    },'partials/layout/contents/Hadoop/index.css']).then(function() {
						$scope.contentWrapper = "partials/layout/contents/Hadoop/";
					}, function(e) {
						console.log(e);
					});
				};
				
				$scope.machineLearning = function() {
					$ocLazyLoad.load([{
				        name: 'machineLearningService',
				        files: ['partials/layout/contents/MachineLearning/service.js']
				    },{
				        name: 'machineLearningController',
				        files: ['partials/layout/contents/MachineLearning/controller.js']
				    },'partials/layout/contents/MachineLearning/index.css']).then(function() {
						$scope.contentWrapper = "partials/layout/contents/MachineLearning/";
					}, function(e) {
						console.log(e);
					});
				};
		}]);//indexModule.controller

});