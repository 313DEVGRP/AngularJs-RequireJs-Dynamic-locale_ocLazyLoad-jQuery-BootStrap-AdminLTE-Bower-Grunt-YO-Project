'use strict';

define(['projectWeb'], function () {

  var contentsChatModule = angular.module('contentsChatControllerModule', ['rivalWarLayoutServiceModule']);

  contentsChatModule.controller('contentsChatController', ['$scope',
    '$ocLazyLoad', '$stateParams', 'rivalWarLayoutService',
    function ($scope, $ocLazyLoad, $stateParams, rivalWarLayoutService) {

      console.log('contentsChatController');

    }]);
});
