'use strict';

define(['projectWeb'], function () {
	
	var strutsiBatisServiceModule = angular.module('strutsiBatisServiceModule', []);
	
	strutsiBatisServiceModule.factory('strutsiBatisService', ['$rootScope',
	                                      	        function($rootScope) {
		return {
			fire: function() {
				console.log('strutsiBatisServiceModule')
			}//fire end
		};//return end
	}]);//.define function end
});