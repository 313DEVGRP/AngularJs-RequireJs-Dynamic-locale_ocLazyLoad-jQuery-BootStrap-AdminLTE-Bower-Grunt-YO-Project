'use strict';

var indexModule = angular.module('projectWeb', ['ui.router', 'oc.lazyLoad']);

indexModule.config(['$stateProvider', '$locationProvider', '$urlRouterProvider', '$ocLazyLoadProvider', function($stateProvider, $locationProvider, $urlRouterProvider, $ocLazyLoadProvider) {
	$urlRouterProvider.otherwise("/");
    $locationProvider.hashPrefix('standardDevelopment#');
    
	$ocLazyLoadProvider.config({
        jsLoader: requirejs,
        debug: true
    });
	
}]);

indexModule.controller('indexController', ['$scope', '$ocLazyLoad', function($scope, $ocLazyLoad) {

	$ocLazyLoad.load('lib/bootstrap/dist/css/bootstrap.min.css');
	$ocLazyLoad.load('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css');
	$ocLazyLoad.load('https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css');
	$ocLazyLoad.load('lib/bower-jvectormap/jquery-jvectormap-1.2.2.css');
	$ocLazyLoad.load('AdminLTE-2.3.3/dist/css/AdminLTE.css');
	$ocLazyLoad.load('AdminLTE-2.3.3/dist/css/skins/_all-skins.min.css');
	
	$scope.mainHeader = 'partials/index/header.html';
    
    
    $scope.load = function() {
        $ocLazyLoad.load('lazymodule').then(function() {
            $scope.partialUrl = 'partials/grid.html';
        }, function(e) {
            console.log(e);
        });
    }
}]);