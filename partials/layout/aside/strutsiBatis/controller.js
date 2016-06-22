'use strict';

define(['projectWeb'], function () {
	
	var strutsiBatisModule = angular.module('projectWeb', ['ui.router', 'oc.lazyLoad']);
	
	strutsiBatisModule.controller('strutsiBatisController', ['$scope', '$ocLazyLoad', 
	                                      	        function($scope, $ocLazyLoad) {
		$scope.test = "lazymodule 로드 했음.";
		$.AdminLTE.layout.activate();
	}]);//strutsiBatisController.controller
	
});