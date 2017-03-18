'use strict';

define(['projectWeb'], function () {

  var rivalWarAsideModule = angular.module('rivalWarAsideControllerModule', ['rivalWarLayoutServiceModule']);

  rivalWarAsideModule.controller('rivalWarAsideController', ['rivalWarLayoutService', '$scope', '$http', '$q',
    function (rivalWarLayoutService, $scope, $http, $q) {

      console.log('rivalWarAsideController');

      $scope.init = function () {
        var def = $q.defer();
            $http({
            method: 'GET' ,
            cache: false,
            url: 'http://www.313.co.kr/rivalWar/api/menu/getChildMenu.do?c_id=2',
            headers: {
              'X-Requested-With':' XMLHttpRequest'
            }
          }).success(function(response) {
            $scope.warList = response;
            $('.repeatList > li').eq(0).addClass('on');
            def.resolve(response);
          }).finally(function() {
            console.log('good');
          });
        return def.promise;
      };
      $scope.init();


    }]);
});
