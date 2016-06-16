var testModule = angular.module('projectWeb', ['oc.lazyLoad']);

testModule.config(['$ocLazyLoadProvider', function($ocLazyLoadProvider) {
    $ocLazyLoadProvider.config({
        jsLoader: requirejs,
        debug: true
    });
}]);

testModule.controller('mainController', ['$scope', '$ocLazyLoad', function($scope, $ocLazyLoad) {
    $scope.test = "변수 바인딩 테스트";
    $scope.partialUrl = '';

    $scope.load = function() {
        $ocLazyLoad.load('lazymodule').then(function() {
            $scope.partialUrl = 'partials/grid.html';
        }, function(e) {
            console.log(e);
        });
    }
}]);
