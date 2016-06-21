'use strict';

define(['projectWeb'], function () {
	
	var lazyModule = angular.module('projectWeb', ['oc.lazyLoad']);
	
	lazyModule.config(['$ocLazyLoadProvider', 
	                    function($ocLazyLoadProvider) {
	            		
	            			$ocLazyLoadProvider.config({
	            				jsLoader: requirejs,
	            				debug: true
	            			}); //$ocLazyLoadProvider
	            	}]); //indexModule.config
	
	lazyModule.controller('lazyController', ['$scope', '$ocLazyLoad', 
	                                         function($scope, $ocLazyLoad) {
		
		$ocLazyLoad.load([]);
		$scope.test = "lazymodule 로드 했음.";
	}]);
	
	lazyModule.bootstrap = function () {
	    angular.bootstrap(document, ['lazyModule']);
	};

	return lazyModule;
});