'use strict';

define(['angular'], function(angular) {
	angular.module('projectWeb.version.interpolate-filter', [])
	.filter('interpolate', ['version', function(version) {
		return function(text) {
			return String(text).replace(/\%VERSION\%/mg, version);
		};
	}]);
});