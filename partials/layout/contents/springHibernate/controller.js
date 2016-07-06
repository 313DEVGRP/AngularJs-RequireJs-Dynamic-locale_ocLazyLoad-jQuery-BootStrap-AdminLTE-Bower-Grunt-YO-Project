'use strict';

define(['projectWeb'], function () {
	
	var springHibernateModule = angular.module('projectWeb', ['ui.router', 'oc.lazyLoad', 'springHibernateService', 'layoutService']);
	
	springHibernateModule.controller('springHibernateController', ['$scope', '$ocLazyLoad', 'springHibernateService', 'layoutService',
	                                      	        function($scope, $ocLazyLoad, springHibernateService, layoutService) {
		
		$ocLazyLoad.load([
		                  'partials/common/js/jstree-v.pre1.0/_lib/jquery.cookie.js',
		                  'partials/common/js/jstree-v.pre1.0/_lib/jquery.hotkeys.js',
		                  'partials/common/js/jstree-v.pre1.0/jquery.jstree.js',
		                  
		                  'AdminLTE-2.3.3/plugins/datatables/jquery.dataTables.min.css',
		                  'AdminLTE-2.3.3/plugins/datatables/dataTables.bootstrap.css',
		              	  'AdminLTE-2.3.3/plugins/datatables/extensions/Responsive/css/dataTables.responsive.css'

          ]).then(function() {
        	  springHibernateService.fire();
        	  layoutService.fire();
	    });

		
	}]);//strutsiBatisController.controller
	
});