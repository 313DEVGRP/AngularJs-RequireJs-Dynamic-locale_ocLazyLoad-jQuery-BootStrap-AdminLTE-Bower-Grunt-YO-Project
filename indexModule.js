'use strict';

define(['projectWeb'], function () {
	
	var indexModule = angular.module('projectWeb', ['ui.router', 'oc.lazyLoad']);

	indexModule.config(['$stateProvider', '$locationProvider', '$urlRouterProvider', '$ocLazyLoadProvider',
        function($stateProvider, $locationProvider, $urlRouterProvider, $ocLazyLoadProvider) {
			
			$urlRouterProvider.otherwise("/");
			$locationProvider.hashPrefix("StandardDevelopment#");
			
			// You can also load via resolve
		    $stateProvider
		      .state('index', {
		        url: "/", // root route
		        views: {
		          "indexView": {
		            controller: 'partialIndexController', // This view will use AppCtrl loaded below in the resolve
		            templateUrl: 'partials/index/partial-index.html'
		          }
		        },
		        resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
		          indexCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
		            // you can lazy load files for an existing module
		            return $ocLazyLoad.load('partials/index/controller/index.js');
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
       
   	}]);//indexModule.controller
   	
   	indexModule.bootstrap = function () {
   	    angular.bootstrap(document, ['indexModule']);
   	};

   	return indexModule;
});