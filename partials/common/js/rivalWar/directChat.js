$(function () {
  console.log("directChat script done");

  // 메뉴 API
  var ajaxParamType = 'noneParam';
  var ajaxParam = '';
  var ajaxURL = '/api/rivalWar/directChat/getPaginatedChildNode.do?c_id=2&pageIndex=1&pageUnit=1&pageSize=10';
  var ajaxType = 'GET';
  var ajaxReturnType = 'json';

  function beforeSendCallback() {
    console.log("beforeSendCallback");
  }

  function successCallback(responseData) {
    directChatAjaxCall(responseData.result);
  }

  function errorCallback() {
    console.log("errorCallback");
  }

  function completeCallback() {
    console.log("completeCallback");
  }

  callAjax(ajaxParamType, ajaxParam, ajaxURL, ajaxType, ajaxReturnType, beforeSendCallback, successCallback, errorCallback, completeCallback);
});


function directChatAjaxCall(jsonData){
  $('#chat-messages').empty(); //패널(div)의 내용 초기화
  var table = "";
  $(jsonData).each(function (chatIndex, chatList){

    table += "<div class='chat-message'>";

    table += "  <div class='sender pull-left'>";
    table += "    <div class='time'>" + chatList.writeTime + "</div>";
    table += "    <span class='user-lev'>";
    table += "      <img src='partials/common/img/custom/level1.png'>";
    table += "    </span>";
    table += "    <div class='icon'>";
    table += "      <img src='partials/common/img/custom/user1.png' class='img-circle' alt=''>";
    table += "    </div>";
    table += "  </div>";

    table += "  <div class='chat-message-body msg-yellow'>";
    table += "    <span class='arrow'></span>";
    table += "    <div class='sender'>";
    table += "      <a href='#'>" + chatList.userId + "</a>";
    table += "    </div>";
    table += "    <div class='text'>" + chatList.contentsBody + "</div>";
    table += "    <div class='tag'>";
    table += "      <span class='item-color-B'>" + chatList.hashTags + "</span>";
    table += "    </div>";
    table += "    <div class='btn_reply'>";
    table += "      <button class='info-box-icon chat-type type-up'>";
    table += "        <i class='fa fa-thumbs-o-up'></i>" + chatList.likeCount;
    table += "      </button>";
    table += "      <button class='info-box-icon chat-type type-down'>";
    table += "        <i class='fa fa-thumbs-o-down'></i>" + chatList.hateCount;
    table += "      </button>";
    table += "      <button class='info-box-icon chat-type type-reply'>";
    table += "        <i class='fa fa-comment-o'></i>" + "답글";
    table += "      </button>";
    table += "      <button class='info-box-icon chat-type type-reply'>";
    table += "        <i class='fa fa-bell-o'></i>" + "신고";
    table += "      </button>";
    table += "    </div>";

    replyChatAjaxCall(chatList, table);

    table += "  </div>";
    table += "</div>";

  });
  $('#chat-messages').append(table); //패널에 추가하기
}

function replyChatAjaxCall(chatList, table){

  console.log("menu script done");

  // 메뉴 API
  var ajaxParamType = 'noneParam';
  var ajaxParam = '';
  var ajaxURL = '/api/rivalWar/directChat/getPaginatedChildNode.do?c_id=' + chatList.c_id + '&pageIndex=1&pageUnit=1&pageSize=100';
  var ajaxType = 'GET';
  var ajaxReturnType = 'json';

  function beforeSendCallback() {
    console.log("beforeSendCallback");
  }

  function successCallback(responseData) {

    table += "<ul class='reply-wrap'>";
    var collection = responseData.result;

    $(collection).each(function (replyIndex, replyList){

      table += "  <li class='reply-msg clearfix'>";
      table += "    <div class='reply-content'>";
      table += "      <div class='written-info'>";
      table += "        <span class='user-img'>";
      table += "          <img alt='message user image' src='partials/common/img/custom/user1.png'>";
      table += "        </span>";
      table += "        <span class='direct-chat-name pull-left'>" + replyList.userId + "</span>";
      table += "        <span class='direct-chat-timestamp pull-right'>" + replyList.writeTime + "</span>";
      table += "      </div>";
      table += "      <p>" + replyList.contentsBody + "</p>";
      table += "      <div>";
      table += "        <button class='info-box-icon chat-type type-up'>" + "좋아요" + replyList.likeCount + "</button>";
      table += "        <button class='info-box-icon chat-type type-reply'>" + "답글 달기" + "</button>";
      table += "      </div>";
      table += "   </div>";
      table += "  </li>";

    });

    table += "</ul>";

  }

  function errorCallback() {
    console.log("errorCallback");
  }

  function completeCallback() {
    console.log("completeCallback");
  }

  callAjax(ajaxParamType, ajaxParam, ajaxURL, ajaxType, ajaxReturnType, beforeSendCallback, successCallback, errorCallback, completeCallback);

}
