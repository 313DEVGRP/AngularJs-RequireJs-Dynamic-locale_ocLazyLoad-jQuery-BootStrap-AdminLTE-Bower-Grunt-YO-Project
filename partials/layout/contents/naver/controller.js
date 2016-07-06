'use strict';

define(['projectWeb'], function () {
	
	var naverModule = angular.module('projectWeb', ['ui.router', 'oc.lazyLoad', 'naverService', 'layoutService']);
	
	naverModule.controller('naverController', ['$scope', '$ocLazyLoad', 'naverService', 'layoutService',
	                                      	        function($scope, $ocLazyLoad, naverService, layoutService) {
		
		$ocLazyLoad.load([
		                  'partials/common/js/jstree-v.pre1.0/_lib/jquery.cookie.js',
		                  'partials/common/js/jstree-v.pre1.0/_lib/jquery.hotkeys.js',
		                  'partials/common/js/jstree-v.pre1.0/jquery.jstree.js',
		                  
		                  'AdminLTE-2.3.3/plugins/datatables/jquery.dataTables.min.css',
		                  'AdminLTE-2.3.3/plugins/datatables/dataTables.bootstrap.css',
		              	  'AdminLTE-2.3.3/plugins/datatables/extensions/Responsive/css/dataTables.responsive.css'

          ]).then(function() {
        	  naverService.fire();
        	  layoutService.fire();
	    });

		
	}]);//strutsiBatisController.controller
	
});