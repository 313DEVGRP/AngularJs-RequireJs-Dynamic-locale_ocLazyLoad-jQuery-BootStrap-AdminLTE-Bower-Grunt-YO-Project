'use strict';

define(['projectWeb'], function () {
	
	var indexModule = angular.module('projectWeb', ['ngRoute', 'ui.router', 'oc.lazyLoad']);

	indexModule.config(['$routeProvider', '$stateProvider', '$locationProvider', '$urlRouterProvider', '$ocLazyLoadProvider',
        function($routeProvider, $stateProvider, $locationProvider, $urlRouterProvider, $ocLazyLoadProvider) {
			
			$urlRouterProvider.otherwise("/");
			$locationProvider.hashPrefix("StandardDevelopment#");

			
			// You can also load via resolve
		    $stateProvider
		      .state('index', {
		        url: "/", // root route
		        views: {
		          '': {
		            controller: 'indexController', // This view will use AppCtrl loaded below in the resolve
		            templateUrl: 'partials/index/'
		          }
		        },
		        resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
		          indexCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
		            // you can lazy load files for an existing module
		            return $ocLazyLoad.load('partials/index/controller/indexController.js');
		          }]
		        }
		      });
	}]); //indexModule.config
});