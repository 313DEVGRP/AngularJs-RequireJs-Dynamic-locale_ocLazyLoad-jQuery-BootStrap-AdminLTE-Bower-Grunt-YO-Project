'use strict';

define(['projectWeb'], function () {
	
	var lazyModule = angular.module('projectWeb', ['ui.router', 'oc.lazyLoad']);
	
	lazyModule.controller('lazyController', ['$scope', '$ocLazyLoad', 
	                                      	        function($scope, $ocLazyLoad) {
		$scope.test = "lazymodule 로드 했음.";
		
		$.AdminLTE.layout.activate();
	}]);//lazyController.controller
	
});