'use strict';

define(['projectWeb'], function () {

  var rivalWarHeaderControllerModule = angular.module('projectWeb', []);

  rivalWarHeaderControllerModule.controller('rivalWarHeaderController',
    function ($scope, $http, $window, $q) {

      $scope.init = function() {
        var def = $q.defer();
          $http({
            method: 'GET' ,
            cache: false,
            url: '/com/ext/jstree/springHibernate/core/getChildNode.do?c_id=1',
            headers: {
              'X-Requested-With':' XMLHttpRequest'
            }
          }).success(function(response) {
            $scope.headerList = response;
            def.resolve(response);
          }).finally(function() {
            console.log('good');
          });
        return def.promise;
      };

      console.log('rivalWarHeaderController');

      var flag = true;
      $scope.winWid = $window.innerWidth;

      angular.element($window).bind('resize', function () {
        $scope.testWid = $window.innerWidth;
        if ($scope.winWid <= 768) {
          flag = true;
          $('body').removeClass('sidebar-open');
        } else if ($scope.winWid >= 768) {
          $('.blind').fadeTo(500, 0, function () {
            $(this).remove();
          });
        }
      });

      $scope.asideToggle = function () {
        var $body = $('body'),
          blind = '<div class="blind"></div>';
        if ($scope.winWid <= 767) {
          if (flag === true) {
            flag = false;
            $body.append(blind).find('.blind').fadeTo(500, 0.5);
          } else if (flag === false) {
            flag = true;
            $('.blind').fadeTo(500, 0, function () {
              $(this).remove();
            })
          }
        } else if ($scope.winWid >= 768) {

        }
      };

    });

});
