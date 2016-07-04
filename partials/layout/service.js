'use strict';

define(['projectWeb'], function () {
	
	var layoutServiceModule = angular.module('layoutServiceModule', []);
	
	layoutServiceModule.factory('layoutService', ['$rootScope',
	                                      	        function($rootScope) {
		return {
			fire: function() {
				$.AdminLTE.layout.activate();
				
			}//fire end
		};//return end
	}]);//.define function end
});
