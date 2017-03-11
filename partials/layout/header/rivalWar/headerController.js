'use strict';

define(['projectWeb'], function () {

  var rivalWarHeaderControllerModule = angular.module('projectWeb', ['ui.router', 'oc.lazyLoad']);

  rivalWarHeaderControllerModule.controller('rivalWarHeaderController', ['$scope', '$http', '$window',
    function ($scope, $http, $window) {

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

      $scope.asideToggle = function (e) {
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


      /* 파라메터로 보낼 임의의 데이터 객체 */
      var dataObject =
      {
        dataNo: $scope.dataNo + "",
        dataName: $scope.dataName,
        dataContent: $scope.dataContent
      };

      /* AJAX 통신 처리 */
      $http({
        method: 'GET', //방식
        url: 'http://localhost:8080/com/ext/jstree/springHibernate/core/getChildNode.do?c_id=2', /* 통신할 URL */
        /* data: dataObject, 파라메터로 보낼 데이터 */
        headers: {'Content-Type': 'application/json; charset=utf-8'} //헤더
      })
        .success(function (data, status, headers, config) {
          if (data) {
            /* 성공적으로 결과 데이터가 넘어 왔을 때 처리 */
            $scope.headerList = data;
          }
          else {
            /* 통신한 URL에서 데이터가 넘어오지 않았을 때 처리 */
          }
        })
        .error(function (data, status, headers, config) {
          /* 서버와의 연결이 정상적이지 않을 때 처리 */
          console.log(status);
        });

    }]);

});
