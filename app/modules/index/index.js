'use strict';

define([
	'angular',
	'angularRoute',
	'view1/view1',
	'view2/view2'
], function(angular) {
	// Declare app level module which depends on views, and components
	return angular.module('projectWeb', [
		'ngRoute',
		'projectWeb.view1',
		'projectWeb.view2'
	]).
	config(['$routeProvider', function($routeProvider) {
		$routeProvider.otherwise({redirectTo: '/view1'});
	}]);
});

