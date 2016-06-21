'use strict';

define(['projectWeb'], function () {
	
	var indexModule = angular.module('projectWeb', ['ui.router', 'oc.lazyLoad']);
	
	indexModule.controller('partialIndexController', ['$scope', '$ocLazyLoad', 
	        function($scope, $ocLazyLoad) {
		
				
				$scope.loadBootstrap = function() {
				    var unbind = $scope.$on('ocLazyLoad.fileLoaded', function(e, file) {
				        $scope.bootstrapLoaded = true;
				        unbind();
				    });
				    // we could use .then here instead of events
				  };
	    
				  $ocLazyLoad.load([
]);
				$scope.strutsiBatis = function() {
					$ocLazyLoad.load('lazymodule').then(function() {
					$scope.contentWrapper = 'partials/grid.html';
					}, function(e) {
						console.log(e);
					});
				}
		}]);//indexModule.controller
	
});