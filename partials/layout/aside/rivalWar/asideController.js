'use strict';

define(['projectWeb'], function () {

  var rivalWarAsideControllerModule = angular.module('projectWeb', ['ui.router', 'oc.lazyLoad', 'rivalWarLayoutService']);

  rivalWarAsideControllerModule.controller('rivalWarAsideController', ['$scope', '$ocLazyLoad', 'rivalWarLayoutService',
    function ($scope, $ocLazyLoad, rivalWarLayoutService) {

      console.log('rivalWarAsideController');

      var $repeatList = $('.repeatList > li'), idx = 0;

      $repeatList.eq(idx).addClass('on');

      var asideRelList = setInterval(function () {
        rivalWarLayoutService.addOn($repeatList.eq(idx));
        idx += 1;
        if (idx === $repeatList.length) idx = 0;
        rivalWarLayoutService.addOn($repeatList.eq(idx));
      }, 4000);


    }]);

});
