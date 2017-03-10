'use strict';

define(['projectWeb'], function () {

  var rivalWarAsideControllerModule = angular.module('projectWeb', ['ui.router', 'oc.lazyLoad', 'rivalWarLayoutService']);

  rivalWarAsideControllerModule.controller('rivalWarAsideController', ['$scope', '$ocLazyLoad', 'rivalWarLayoutService',
    function ($scope, $ocLazyLoad, rivalWarLayoutService) {

      console.log('rivalWarAsideController');

      $ocLazyLoad.load(['partials/common/js/jstree-v.pre1.0/_lib/jquery.cookie.js'])
        .then(function () {
          var $repeatList = $('.repeatList > li'),
            idx = 0;

          $repeatList.eq(idx).addClass('on');

          var asideRelList = setInterval(function () {
            rivalWarLayoutService.addOn($repeatList.eq(idx));
            idx += 1;
            if (idx === $repeatList.length) idx = 0;
            rivalWarLayoutService.addOn($repeatList.eq(idx));
          }, 4000);

        });


    }]);

});
