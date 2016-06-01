'use strict';


require.config({
	
	paths: {
		jquery: '../../bower_components/jquery/dist/jquery',

		angular: '../../bower_components/angular/angular',
		angularRoute: '../../bower_components/angular-route/angular-route',
		angularMocks: '../../bower_components/angular-mocks/angular-mocks',
		
		text: '../../bower_components/requirejs-text/text'
	},
	
	shim: {
		'angular' : {
			'exports' : 'angular'
		},
		'angularRoute': {
			deps:['angular']
		},
		'jquery': {
			deps:['angular']
		},
	}
	

});


require([
	'angular',
	'jquery',
	'text',
	'index',
	'angularRoute'
	], function(angular, $, text) {
		angular.element().ready(function() {
			angular.bootstrap(document, ['projectWeb']);
		});
		$(document).ready(function () {
			console.log('jquery Fire);
		});
	}
);
