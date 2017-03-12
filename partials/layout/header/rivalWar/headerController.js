'use strict';

define(['projectWeb'], function () {

  var rivalWarHeaderControllerModule = angular.module('projectWeb', ['ui.router', 'oc.lazyLoad']);

  rivalWarHeaderControllerModule.controller('rivalWarHeaderController', ['$scope', '$ocLazyLoad', '$http', '$window',
    function ($scope, $ocLazyLoad, $http, $window) {

      angular.element(document).ready(function () {
        var parameters = {
          c_id: 1
        };
        var config = {
          params: parameters
        };
        $http.get('/com/ext/jstree/springHibernate/core/getChildNode.do', config)
          .success(function (data, status, headers, config) {
            $scope.headerList = data;
          })
          .error(function (data, status, header, config) {
            console.log(status);
          });
      });

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

    }]);

});
