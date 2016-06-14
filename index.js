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
        .state('dev', {
            // we'll get to this in a bit       
        	url: '/dev',
            templateUrl: 'pages/dev/partial-index.html'
        })
        
});
app.controller('indexCtrl', ['$scope', function($scope){
  $scope.appName="AngularJS TODO APP";
  $scope.$on('$includeContentLoaded', function(event) {
	  console.log('$includeContentLoaded');
  });
  $(document).ready(function () {
	  console.log('jquery Fire');
  });
}]);
app.controller('headerCtrl', ['$scope', function($scope){
	$scope.$on('$includeContentLoaded', function(event) {
		var lteApp = document.createElement('script');
		lteApp.src = "pages/common/js/app.js";
		document.getElementsByTagName('head')[0].appendChild(lteApp);
		console.log('$includeContentLoaded');
	});
	$(document).ready(function () {
		var demoApp = document.createElement('script');
		demoApp.src = "pages/common/js/demo.js";
		document.getElementsByTagName('head')[0].appendChild(demoApp);
		console.log('jquery Fire');
	});
}]);
app.controller('contentsCtrl', ['$scope', function($scope){
	$scope.$on('$includeContentLoaded', function(event) {
		var dashboardApp = document.createElement('script');
		dashboardApp.src = "pages/common/js/pages/dashboard2.js";
		document.getElementsByTagName('body')[0].appendChild(dashboardApp);
		console.log('$includeContentLoaded');
	});
	$(document).ready(function () {
		console.log('jquery Fire');
	});
}]);