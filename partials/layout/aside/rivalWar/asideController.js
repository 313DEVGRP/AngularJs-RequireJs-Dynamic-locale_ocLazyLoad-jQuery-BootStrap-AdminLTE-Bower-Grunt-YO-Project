'use strict';

define(['projectWeb'], function () {

  var rivalWarAsideModule = angular.module('projectWeb', ['ui.router', 'oc.lazyLoad']);

  rivalWarAsideModule.controller('rivalWarAsideController', ['$scope', '$ocLazyLoad', '$http',
    function ($scope, $ocLazyLoad, $http) {

      console.log('rivalWarAsideController');

      var parameters = {
        c_id: 2
      };
      var config = {
        params: parameters
      };
      $http.get('/rivalWar/api/menu/getChildMenu.do', config)
        .success(function (data, status, headers, config) {
          $scope.headerList = data;
        })
        .error(function (data, status, header, config) {
          console.log(status);
        });

    }]);

});
