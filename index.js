'use strict';

var app=angular.module('projectWeb',['ngRoute', 'ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/home');
    
    $stateProvider
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'pages/index/partial-index.html'
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            // we'll get to this in a bit       
        });
        
});
app.controller('indexCtrl', ['$scope', function($scope){
	$scope.appName="AngularJS TODO APP";
	$scope.$on('$includeContentLoaded', function(event) {
		console.log('$includeContentLoaded');
		var dashboardApp = document.createElement('script');
		dashboardApp.src = "dist/js/pages/dashboard2.js";
		document.getElementsByTagName('head')[0].appendChild(dashboardApp);
	});
	$(document).ready(function () {
		console.log('jquery Fire');
	});
}]);
