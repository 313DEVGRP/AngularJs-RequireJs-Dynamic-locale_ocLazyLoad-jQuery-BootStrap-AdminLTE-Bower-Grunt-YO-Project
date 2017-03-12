'use strict';

define(['projectWeb'], function () {

  var rivalWarAsideModule = angular.module('projectWeb', ['ui.router', 'oc.lazyLoad']);

  rivalWarAsideModule.controller('rivalWarAsideController', ['$rootScope', '$scope', '$ocLazyLoad', '$http',
    function ($rootScope, $scope, $ocLazyLoad, $http) {

      console.log('rivalWarAsideController');

      angular.element(document).ready(function () {
        var parameters = {
          c_id: 2
        };
        var config = {
          params: parameters
        };
        $http.get('/rivalWar/api/menu/getChildMenu.do', config)
          .success(function (data, status, headers, config) {
            $scope.warList = data;
          })
          .error(function (data, status, header, config) {
            console.log(status);
          });
      });

    }]);

});
