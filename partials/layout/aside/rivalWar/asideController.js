'use strict';

define(['projectWeb'], function () {

  var rivalWarAsideControllerModule = angular.module('projectWeb', ['ui.router', 'oc.lazyLoad']);

  rivalWarAsideControllerModule.controller('rivalWarAsideController', ['$scope', '$ocLazyLoad',
    function ($scope, $ocLazyLoad) {

      console.log('rivalWarAsideController');

      var $repeatList = $('.repeatList > li'), idx = 0;

      $repeatList.eq(idx).addClass('on');

      var asideRelList = setInterval(function () {
        $repeatList.eq(idx).addClass('on').siblings().removeClass();
        idx += 1;
        if (idx === $repeatList.length) idx = 0;
        $repeatList.eq(idx).addClass('on').siblings().removeClass();
      }, 4000);


    }]);

});
