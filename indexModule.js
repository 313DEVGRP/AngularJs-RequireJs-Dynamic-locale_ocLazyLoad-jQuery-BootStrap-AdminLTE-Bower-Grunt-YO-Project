'use strict';
var indexModule = angular.module('projectWeb', ['ui.router', 'oc.lazyLoad']);

indexModule.config(['$stateProvider', '$locationProvider', '$urlRouterProvider', '$ocLazyLoadProvider', function($stateProvider, $locationProvider, $urlRouterProvider, $ocLazyLoadProvider) {
    
	$urlRouterProvider.otherwise("/dev");
	$locationProvider.hashPrefix('standardDevelopment#');
	
      
      $ocLazyLoadProvider.config({
          jsLoader: requirejs,
          debug: true
      });
}]);

indexModule.controller('indexController', ['$scope', '$ocLazyLoad', function($scope, $ocLazyLoad) {

	$ocLazyLoad.load([
		'lib/bootstrap/dist/css/bootstrap.min.css',
		'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css',
		'https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css',
		'AdminLTE-2.3.3/plugins/jvectormap/jquery-jvectormap-1.2.2.css',
		'AdminLTE-2.3.3/dist/css/AdminLTE.custom.css',
		'AdminLTE-2.3.3/dist/css/skins/_all-skins.min.css',
	
		'AdminLTE-2.3.3/plugins/fastclick/fastclick',
	    'AdminLTE-2.3.3/dist/js/app.min',
	    'AdminLTE-2.3.3/plugins/sparkline/jquery.sparkline.min',
	    'AdminLTE-2.3.3/plugins/jvectormap/jquery-jvectormap-1.2.2.min',
	    'AdminLTE-2.3.3/plugins/slimScroll/jquery.slimscroll.min',
	    'AdminLTE-2.3.3/plugins/chartjs/Chart.min',
		'AdminLTE-2.3.3/dist/js/demo.js']);
	
	$scope.mainHeader = 'partials/index/header.html';
	$scope.mainSidebar = 'partials/index/aside.html';
	$scope.contentWrapper = 'partials/index/contents.html';
	$scope.mainFooter = 'partials/index/footer.html';
	$scope.controlSidebar = 'partials/index/sidebar.html';
	
    
    $scope.strutsiBatis = function() {
        $ocLazyLoad.load('lazymodule').then(function() {
            $scope.contentWrapper = 'partials/grid.html';
        }, function(e) {
            console.log(e);
        });
    }
}]);
