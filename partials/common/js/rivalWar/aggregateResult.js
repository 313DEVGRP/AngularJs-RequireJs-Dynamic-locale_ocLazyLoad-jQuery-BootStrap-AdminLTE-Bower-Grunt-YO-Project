$(function () {
  // Aggregate Result API
  var aggregateParamType = 'noneParam';
  var aggregateParam = '';
  var aggregateURL = '/api/rivalWar/menu/getRootAggregateResult.do';
  var aggregateType = 'GET';
  var aggregateReturnType = 'json';
  function aggregateBeforeSendCallback(){ console.log("beforeSendCallback"); }
  function aggregateSuccessCallback (responseData) {
    console.log(responseData)
    $("#topNode").html("우위 스펙 갯수: " + responseData.topNumberOfAdvantages + " 좋아요 획득 갯수 : " + responseData.topLikeCount + "<br>총 등록 글 : " + responseData.topTotalRegisteredPosts + " 총 등록된 해시 태그 : " + responseData.topRegisteredHashTag);
    $("#midNode").html("우위 스펙 갯수: " + responseData.midNumberOfAdvantages + " 좋아요 획득 갯수 : " + responseData.midLikeCount + "<br>총 등록 글 : " + responseData.midTotalRegisteredPosts + " 총 등록된 해시 태그 : " + responseData.midRegisteredHashTag);
    $("#botNode").html("우위 스펙 갯수: " + responseData.botNumberOfAdvantages + " 좋아요 획득 갯수 : " + responseData.botLikeCount + "<br>총 등록 글 : " + responseData.botTotalRegisteredPosts + " 총 등록된 해시 태그 : " + responseData.botRegisteredHashTag);

    $("#topNodeTitle").html(responseData.topName + " (" + responseData.topGraphPercent + "%)");
    $("#topNodeGraph").css("width", responseData.topGraphPercent+"%");

    $("#midNodeTitle").html(responseData.midName + " (" + responseData.midGraphPercent + "%)");
    $("#midNodeGraph").css("width", responseData.midGraphPercent+"%");

    $("#botNodeTitle").html(responseData.botName + " (" + responseData.botGraphPercent + "%)");
    $("#botNodeGraph").css("width", responseData.botGraphPercent+"%");

    $("#topScore").html(responseData.topVersusScore + " points");
    $("#midScore").html(responseData.midVersusScore + " points");
    $("#botScore").html(responseData.botVersusScore + " points");

    $("#totalTraffic").html(responseData.totalTraffic + " <i class='fa fa-caret-up color-green'></i>");
    $("#uniqueVisit").html(responseData.uniqueVisit + " <i class='fa fa-caret-down color-red'></i>");
    $("#revisitCount").html(responseData.revisitCount + " <i class='fa fa-caret-up color-green'></i>");
    $("#pageView").html(responseData.pageView + " <i class='fa fa-caret-down color-red'></i>");


    $("#totalArticle").html(responseData.totalArticle);
    $("#totalLikeCount").html(responseData.totalLikeCount);
    $("#totalSpecCount").html(responseData.totalSpecCount);
    $("#totalHashCount").html(responseData.totalHashCount);
    $("#standardError").html(responseData.standardError);
    $("#equilibriumAssumption").html(responseData.equilibriumAssumption);
    $("#probability").html(responseData.probability);
    $("#lowerLimit").html(responseData.lowerLimit);
    $("#higherLimit").html(responseData.higherLimit);
    $("#distributionTResult").html(responseData.distributionTResult);
  }
  function aggregateErrorCallback(){ console.log("errorCallback"); }
  function aggregateCompleteCallback(){ console.log("completeCallback"); }
  callAjax(aggregateParamType, aggregateParam, aggregateURL, aggregateType, aggregateReturnType, aggregateBeforeSendCallback, aggregateSuccessCallback, aggregateErrorCallback, aggregateCompleteCallback);
});
