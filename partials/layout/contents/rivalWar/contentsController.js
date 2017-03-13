'use strict';

define(['projectWeb'], function () {

  var rivalWarContentsModule = angular.module('rivalWarContentsControllerModule', ['rivalWarLayoutServiceModule']);

  rivalWarContentsModule.controller('rivalWarContentsController', ['rivalWarLayoutService',
    function ($rootScope, $scope, $http, $q, rivalWarLayoutService) {


        console.log('rivalWarContentsController');
        rivalWarLayoutService.fire();

    }]);
});
