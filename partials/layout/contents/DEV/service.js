'use strict';

define(['projectWeb'], function () {
	
	var devContentsServiceModule = angular.module('devContentsServiceModule', []);
	
	devContentsServiceModule.factory('devContentsServiceModule', ['$rootScope',
	                                      	        function($rootScope) {
		return {
			fire: function() {
				console.log('devContentsServiceModule')
			}//fire end
		};//return end
	}]);//.define function end
});