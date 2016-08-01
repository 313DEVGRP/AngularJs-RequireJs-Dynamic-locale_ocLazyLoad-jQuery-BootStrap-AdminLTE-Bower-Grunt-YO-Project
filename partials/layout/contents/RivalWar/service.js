'use strict';

define(['projectWeb'], function () {
	
	var rivalWarContentsServiceModule = angular.module('rivalWarContentsServiceModule', []);
	
	rivalWarContentsServiceModule.factory('rivalWarContentsServiceModule', ['$rootScope',
	                                      	        function($rootScope) {
		return {
			fire: function() {
				console.log('rivalWarContentsServiceModule')
			}//fire end
		};//return end
	}]);//.define function end
});