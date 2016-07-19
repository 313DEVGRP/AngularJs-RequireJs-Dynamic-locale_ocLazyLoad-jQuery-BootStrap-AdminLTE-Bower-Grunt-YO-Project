'use strict';

define(['projectWeb'], function () {
	
	var jsTreeArchitectureServiceModule = angular.module('jsTreeArchitectureServiceModule', []);
	
	jsTreeArchitectureServiceModule.factory('jsTreeArchitectureService', ['$rootScope',
	                                      	        function($rootScope) {
		return {
			fire: function() {
				console.log('jsTreeArchitectureService')
			}//fire end
		};//return end
	}]);//.define function end
});sz