'use strict';

define(['projectWeb'], function () {

  var rivalWarHeaderControllerModule = angular.module('rivalWarHeaderControllerModule', ['rivalWarLayoutServiceModule']);

  rivalWarHeaderControllerModule.controller('rivalWarHeaderController', ['rivalWarLayoutService', '$scope', '$http', '$window', '$q',
    function (rivalWarLayoutService, $scope, $http, $window, $q) {

      $scope.init = function () {
        var def = $q.defer();
        $http({
          method: 'GET',
          cache: false,
          url: 'http://www.313.co.kr/com/ext/jstree/springHibernate/core/getChildNode.do?c_id=2',
          headers: {
            'X-Requested-With': ' XMLHttpRequest'
          }
        }).success(function (response) {
          $scope.headerList = response;

          $scope.timer = function () {
          };

          var idx = 0;
          setInterval(function () {
            var $rivalList = $('.rivalList-content li');
            rivalWarLayoutService.movement($rivalList, idx, 0, "-100%");
            idx +=1;
            if(idx === $rivalList.length) idx = 0;
            rivalWarLayoutService.movement($rivalList, idx, "100%", 0);
          },4000);

          def.resolve(response);

        }).finally(function () {
          console.log('good');
        });
        return def.promise;
      };
      $scope.init();

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
