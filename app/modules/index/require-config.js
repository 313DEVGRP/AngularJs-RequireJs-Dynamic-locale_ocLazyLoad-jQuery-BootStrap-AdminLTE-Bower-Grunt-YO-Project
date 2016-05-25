'use strict';

require.config({
	
	paths: {
		

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
		'angularMocks': {
			deps:['angular'],
			'exports':'angular.mock'
		},
		'index': {
			deps:['angular']
		}
	},
	

});


require([
	'angular',
	'index'
	], function(angular) {
		//var $html = angular.element(document.getElementsByTagName('html')[0]);
		angular.element().ready(function() {
			// bootstrap the index manually
			angular.bootstrap(document, ['projectWeb'], { strictDi: true });
		});
	}
);