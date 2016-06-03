'use strict';

var app=angular.module('projectWeb',[]);
app.controller('indexCtrl', function($scope){
  $scope.appName="AngularJS TODO APP";
  $(document).ready(function () {
		console.log('jquery Fire');
	});
});
