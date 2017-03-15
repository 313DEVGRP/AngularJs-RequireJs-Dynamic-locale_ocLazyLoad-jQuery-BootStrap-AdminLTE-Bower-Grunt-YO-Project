'use strict';

define(['projectWeb'], function () {

  var contentsChatModule = angular.module('contentsChatControllerModule', ['rivalWarLayoutServiceModule']);

  contentsChatModule.controller('contentsChatController', ['$scope',
    '$ocLazyLoad', '$stateParams', 'rivalWarLayoutService',
    function ($scope, $ocLazyLoad, $stateParams, rivalWarLayoutService) {

      console.log('contentsChatController');

      /* 댓글 */
      $scope.directChatList = [ // 원글
        {
          support: true,
          userName: "Ryan Heywood",
          userImg: "./partials/common/img/community/user1.jpg",
          userRank: "./partials/common/img/community/level1.jpg",
          date: "01월 16일 14:59",
          text: "안드로이드의 경우 사용하지 않는 앱들이 설치되어 있는데 삭제도 안되니 더 불편한거 아닌가요?"
        },
        {
          support: false,
          userName: "Ryan Heywood",
          userImg: "./partials/common/img/community/user2.jpg",
          userRank: "./partials/common/img/community/level2.jpg",
          date: "01월 16일 17:31",
          text: "아이폰 사용의 좋은 점이 분명히 있지만, 처음 사용자가 쓰기에는 어려움이 너무 많습니다."
        }
      ];

      $scope.chatReplyList = [ // 답글
        {
          support: true,
          userName: "Ryan Heywood",
          userImg: "./partials/common/img/community/user1.jpg",
          date: "01월 16일 14:59",
          text: "안드로이드의 경우 사용하지 않는 앱들이 설치되어 있는데 삭제도 안되니 더 불편한거 아닌가요?"
        },
        {
          support: false,
          userName: "Ryan Heywood",
          userImg: "./partials/common/img/community/user2.jpg",
          date: "01월 16일 17:31",
          text: "아이폰 사용의 좋은 점이 분명히 있지만, 처음 사용자가 쓰기에는 어려움이 너무 많습니다."
        }
      ];

      $scope.goReply = false;
      $scope.replyTo = false;

    }]);
});
