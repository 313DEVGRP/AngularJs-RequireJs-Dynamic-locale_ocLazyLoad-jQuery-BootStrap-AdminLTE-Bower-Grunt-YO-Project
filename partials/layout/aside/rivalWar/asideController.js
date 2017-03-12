'use strict';

define(['projectWeb'], function () {

  var rivalWarAsideModule = angular.module('projectWeb', ['ui.router', 'oc.lazyLoad']);

  rivalWarAsideModule.controller('rivalWarAsideController', ['$rootScope', '$scope', '$ocLazyLoad', '$http', '$timeout',
    function ($rootScope, $scope, $ocLazyLoad, $http, $timeout) {

      console.log('rivalWarAsideController');

      // in controller
      $timeout(function(){
        // check if there is query in url
        // and fire search in case its value is not empty
        var parameters = {
          c_id: 2
        };
        var config = {
          params: parameters
        };
        $http.get('http://localhost:8080/rivalWar/api/menu/getChildMenu.do', config)
          .success(function (data, status, headers, config) {
            $scope.warList = data;
          })
          .error(function (data, status, header, config) {
            console.log(status);
          });
      });

    }]);
});
