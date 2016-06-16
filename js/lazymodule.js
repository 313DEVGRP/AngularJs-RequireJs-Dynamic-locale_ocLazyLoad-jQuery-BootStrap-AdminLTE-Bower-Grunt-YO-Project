angular.module('js/lazymodule', [])
	.controller('lazyController', ['$scope', function($scope){
		$scope.test = "Hey again";
}]);