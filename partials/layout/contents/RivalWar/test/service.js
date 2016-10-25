'use strict';

define(['projectWeb'], function () {

  var testPageServiceModule = angular.module('testPageServiceModule', []);

  testPageServiceModule.factory('testPageService', ['$rootScope',
    function($rootScope) {
      return {
        fire: function() {
          console.log('testPageService')
        }//fire end
      };//return end
    }]);//.define function end
});
