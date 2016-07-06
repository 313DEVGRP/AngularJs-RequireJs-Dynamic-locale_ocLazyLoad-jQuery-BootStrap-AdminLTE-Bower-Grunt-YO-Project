'use strict';

require.config({
	baseUrl: '',

	paths: {
		//jquery
		'jquery': 'lib/jquery/dist/jquery.min',
	    'jquery-ui': 'lib/jquery-ui/jquery-ui.min',
	    'jquery-migrate': 'lib/jquery-migrate/jquery-migrate.min',
	    
	    //twitterBootstrap
	    'twitterBootstrap': 'lib/bootstrap/dist/js/bootstrap.min',
	    
	    //angular
	    'angular': 'lib/angular/angular.min',
	    'ui.router': 'lib/angular-ui-router/release/angular-ui-router',
	    'ngRoute': 'lib/angular-route/angular-route.min',
	    'oc.lazyLoad': 'lib/oclazyload/dist/ocLazyLoad.require',
	    'text': 'lib/requirejs-text/text', 
	    'css': 'lib/require-css/css.min',
	    
	    //module
	    'fastclick': 'AdminLTE-2.3.3/plugins/fastclick/fastclick',
	    'sparkline': 'AdminLTE-2.3.3/plugins/sparkline/jquery.sparkline.min',
	    'jvectormap': 'AdminLTE-2.3.3/plugins/jvectormap/jquery-jvectormap-1.2.2.min',
	    'jvectormapWorld': 'AdminLTE-2.3.3/plugins/jvectormap/jquery-jvectormap-world-mill-en',
	    'slimScroll': 'AdminLTE-2.3.3/plugins/slimScroll/jquery.slimscroll.min',
	    'chartjs': 'AdminLTE-2.3.3/plugins/chartjs/Chart.min',
	    'adminLte': 'AdminLTE-2.3.3/dist/js/app',
	    'demo': 'AdminLTE-2.3.3/dist/js/demo',
	    'dataTables':'AdminLTE-2.3.3/plugins/datatables/jquery.dataTables.min',
	    'dataTables.bootstrap':'AdminLTE-2.3.3/plugins/datatables/dataTables.bootstrap.min',
        'dataTables.responsive':'AdminLTE-2.3.3/plugins/datatables/extensions/Responsive/js/dataTables.responsive.min',
	    
	    'projectWeb': 'partials/layout/routeConfig'
	},

	shim: {
		'jquery-migrate': ['jquery'],
		'jquery-ui': ['jquery'],
		'twitterBootstrap': ['jquery'],
	    'angular': ['jquery'],
	    'ngRoute': ['angular'],
	    'ui.router': ['angular'],
	    'oc.lazyLoad': ['angular'],
	    'text': ['angular'],
	    'css': ['angular'],
	    
	    'fastclick': ['jquery'],
	    'sparkline': ['jquery'],
	    'jvectormap': ['jquery'],
	    'jvectormapWorld': ['jquery'],
	    'slimScroll': ['jquery'],
	    'chartjs': ['jquery'],
	    
	    'adminLte': ['angular'],
	    'demo': ['angular'],
	    'dataTables': ['angular'],
	    'dataTables.bootstrap': ['angular'],
	    'dataTables.responsive': ['angular'],
	    'projectWeb': ['adminLte']
	}
});

require(	[
          		'projectWeb'
          	], 
          	function (projectWeb, css) {
				$(document).ready(function () {
					angular.bootstrap(document, ['projectWeb']);
				});
				
				function loadCss(url) {
				    var link = document.createElement("link");
				    link.type = "text/css";
				    link.rel = "stylesheet";
				    link.href = url;
				    document.getElementsByTagName("head")[0].appendChild(link);
				};
			}//$(document).ready
);//require
