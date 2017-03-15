'use strict';

define(['projectWeb'], function () {

  var rivalWarContentsModule = angular.module('rivalWarContentsControllerModule', ['rivalWarLayoutServiceModule']);

  rivalWarContentsModule.controller('rivalWarContentsController', ['$scope',
    '$ocLazyLoad', '$stateParams', 'rivalWarLayoutService',
    function ($scope, $ocLazyLoad, $stateParams, rivalWarLayoutService) {

      console.log('rivalWarContentsController');

      angular.element(document).ready(function () {
        if (typeof $stateParams.subModule != 'undefined') {
          console.log($stateParams.subModule);
          $scope.subName = $stateParams.subModule;
          $scope.$emit('emitSubModule', {message: $scope.subName});
        }
      });

      $('#carousel-example-generic').carousel({
        interval: 2000
      });

      /* 토글 슬라이드 이벤트 */
      $('.item-table li').on('click', function () {
        var viewWidth = $('.rival-content').outerWidth();
        if (viewWidth < 460) {
          if ($(this).find('.fa').hasClass('fa-plus')) {
            $(this).find('.fa').attr('class', 'fa fa-minus');
            $(this).find('.dl-box').slideDown();
          } else {
            $(this).find('.fa').attr('class', 'fa fa-plus');
            $(this).find('.dl-box').slideUp();
          }
        }
      });
      /* 데이터 적용 */
      $scope.warTime = '2016년 11월 4일';

    }]);
});
