'use strict';

define(['projectWeb'], function () {
	
	var indexModule = angular.module('projectWeb', ['ui.router', 'oc.lazyLoad']);

	indexModule.config(['$stateProvider', '$locationProvider', '$urlRouterProvider', '$ocLazyLoadProvider',
        function($stateProvider, $locationProvider, $urlRouterProvider, $ocLazyLoadProvider) {
			
			$urlRouterProvider.otherwise("/");
			$locationProvider.hashPrefix('!');
			
			$stateProvider
		      .state('index', {
		        url: "/index", // root route
		        views: {
		          "lazyLoadView": {
		            controller: 'AppCtrl', // This view will use AppCtrl loaded below in the resolve
		            templateUrl: 'partials/main.html'
		          }
		        },
		        resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
		          loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
		            // you can lazy load files for an existing module
		            return $ocLazyLoad.load('js/AppCtrl.js');
		          }]
		        }
		      });
	}]); //indexModule.config

	indexModule.controller('indexController', ['$scope', '$ocLazyLoad', 
        function($scope, $ocLazyLoad) {
	
			$scope.mainHeader = 'partials/index/header.html';
			$scope.mainSidebar = 'partials/index/aside.html';
			$scope.contentWrapper = 'partials/index/contents.html';
			$scope.mainFooter = 'partials/index/footer.html';
			$scope.controlSidebar = 'partials/index/sidebar.html';
	
			$ocLazyLoad.load([]);
    
			$scope.strutsiBatis = function() {
				$ocLazyLoad.load('lazymodule').then(function() {
				$scope.contentWrapper = 'partials/grid.html';
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