'use strict';

var app=angular.module('projectWeb',[]);
app.controller('indexCtrl', ['$scope', function($scope){
	  $scope.appName="AngularJS TODO APP";
	  $scope.$on('$includeContentLoaded', function(event) {
		  var loader = document.createElement('script');
		  loader.src = "dist/js/app.js";
		  document.getElementsByTagName('head')[0].appendChild(loader);
		  console.log('$includeContentLoaded');
	  });
	  $(document).ready(function () {
		  console.log('jquery Fire');
	  });
	}]); 