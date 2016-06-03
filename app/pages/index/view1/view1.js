'use strict';
define([
	'angular',
	'jquery',
	'text',
	'angularRoute'
], function(angular, $) {
	angular.module('projectWeb.view1', ['ngRoute'])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/view1', {
			templateUrl: 'view1/view1.html',
			controller: 'View1Ctrl'
		});
	}])
	.controller('View1Ctrl', [function() {
		$('.menu').append('<div>hj</div>')
	}]);
});

