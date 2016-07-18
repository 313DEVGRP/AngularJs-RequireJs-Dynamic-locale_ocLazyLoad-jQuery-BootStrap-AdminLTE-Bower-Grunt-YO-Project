'use strict';

define(['projectWeb'], function () {
	
	var devContentsModule = angular.module('projectWeb', ['ui.router', 'oc.lazyLoad', 'devContentsService', 'devLayoutService']);
	
	devContentsModule.controller('devContentsController', ['$scope', '$ocLazyLoad', 'devContentsService', 'devLayoutService',
	                                      	        function($scope, $ocLazyLoad, devContentsService, devLayoutService) {
		
		$ocLazyLoad.load([
		                  'AdminLTE-2.3.3/plugins/datatables/dataTables.bootstrap.css',
		              	  'AdminLTE-2.3.3/plugins/datatables/extensions/Responsive/css/dataTables.responsive.css'

          ]).then(function() {
        	  devContentsService.fire();
        	  devLayoutService.fire();
	    });

		
	}]);//strutsiBatisController.controller
	
});