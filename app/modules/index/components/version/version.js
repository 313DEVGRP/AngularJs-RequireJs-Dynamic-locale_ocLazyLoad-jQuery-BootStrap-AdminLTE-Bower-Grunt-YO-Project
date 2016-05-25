'use strict';

define(['angular', 'components/version/version-directive', 'components/version/interpolate-filter'],
	function(angular) {
		angular.module('projectWeb.version', [
		  'projectWeb.version.interpolate-filter',
		  'projectWeb.version.version-directive'
		])
		.value('version', '0.3');
});