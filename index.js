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
		  var dashboardApp = document.createElement('script');
		  dashboardApp.src = "dist/js/pages/dashboard2.js";
		  document.getElementsByTagName('body')[0].appendChild(dashboardApp);
		  console.log('$includeContentLoaded');
	  });
	  $(document).ready(function () {
		  var lteApp = document.createElement('script');
		  lteApp.src = "dist/js/app.js";
		  document.getElementsByTagName('head')[0].appendChild(lteApp);
		  var demoApp = document.createElement('script');
		  demoApp.src = "dist/js/demo.js";
		  document.getElementsByTagName('head')[0].appendChild(demoApp);
		  console.log('jquery Fire');
	  });
	}]); 