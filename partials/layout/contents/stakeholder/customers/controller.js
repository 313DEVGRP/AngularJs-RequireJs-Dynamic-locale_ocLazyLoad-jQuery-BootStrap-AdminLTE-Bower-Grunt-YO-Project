'use strict';

define(['projectWeb'], function () {
	
	var confluenceModule = angular.module('projectWeb', ['ui.router', 'oc.lazyLoad', 'customersService', 'layoutService']);
	
	confluenceModule.controller('customersController', ['$scope', '$ocLazyLoad', 'customersService', 'layoutService',
	                                      	        function($scope, $ocLazyLoad, customersService, layoutService) {
		
		$ocLazyLoad.load([
		                  'partials/common/js/jstree-v.pre1.0/_lib/jquery.cookie.js',
		                  'partials/common/js/jstree-v.pre1.0/_lib/jquery.hotkeys.js',
		                  'partials/common/js/jstree-v.pre1.0/jquery.jstree.js',
		                  
		                  'AdminLTE-2.3.3/plugins/datatables/jquery.dataTables.min.css',
		                  'AdminLTE-2.3.3/plugins/datatables/dataTables.bootstrap.css',
		              	  'AdminLTE-2.3.3/plugins/datatables/extensions/Responsive/css/dataTables.responsive.css'

          ]).then(function() {
        	  customersService.fire();
        	  layoutService.fire();
	    });

		
	}]);//strutsiBatisController.controller
	
});