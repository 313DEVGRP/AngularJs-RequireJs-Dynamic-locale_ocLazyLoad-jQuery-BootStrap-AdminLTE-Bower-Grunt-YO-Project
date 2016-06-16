angular.module('lazymodule', [])
	.controller('lazyController', ['$scope', function($scope){
		$scope.test = "Hey again";
}]);