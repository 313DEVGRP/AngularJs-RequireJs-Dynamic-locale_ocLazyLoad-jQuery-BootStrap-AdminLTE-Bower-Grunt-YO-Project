'use strict';

angular.module('lazymodule', [])
	.controller('lazyController', ['$scope', function($scope){
		$scope.test = "lazymodule 로드 했음.";
}]);