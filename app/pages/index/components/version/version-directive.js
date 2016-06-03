'use strict';

define(['angular'], function(angular) {
	angular.module('projectWeb.version.version-directive', [])
	.directive('appVersion', ['version', function(version) {
		return function(scope, elm, attrs) {
			elm.text(version);
		};
	}]);
});