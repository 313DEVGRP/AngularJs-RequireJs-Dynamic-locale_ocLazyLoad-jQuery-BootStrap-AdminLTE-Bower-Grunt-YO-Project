'use strict';

define(['projectWeb'], function () {
	
	var springHibernateServiceModule = angular.module('springHibernateServiceModule', []);
	
	springHibernateServiceModule.factory('springHibernateService', ['$rootScope',
	                                      	        function($rootScope) {
		return {
			fire: function() {
				console.log('springHibernateService')
			}//fire end
		};//return end
	}]);//.define function end
});