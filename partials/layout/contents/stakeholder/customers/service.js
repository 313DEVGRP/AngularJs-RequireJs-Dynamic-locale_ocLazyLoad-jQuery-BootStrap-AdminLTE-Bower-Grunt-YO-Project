'use strict';

define(['projectWeb'], function () {
	
	var customersServiceModule = angular.module('customersServiceModule', []);
	
	customersServiceModule.factory('customersService', ['$rootScope',
	                                      	        function($rootScope) {
		return {
			fire: function() {
				console.log('Customer');
				//window.open('http://www.313.co.kr/confluence', 'confluence', '_blank');
			}//fire end
		};//return end
	}]);//.define function end
});