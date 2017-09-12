$(function () {

  var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
      sURLVariables = sPageURL.split('&'),
      sParameterName,
      i;

    for (i = 0; i < sURLVariables.length; i++) {
      sParameterName = sURLVariables[i].split('=');
      if (sParameterName[0] === sParam) {
        return sParameterName[1] === undefined ? true : sParameterName[1];
      }
    }
    return false;
  };

  // 로그인 트랜잭션
  var loginResult = getUrlParameter('loginResult');
  if (loginResult) {
    //alert("login complete");
    $("#account").addClass("dropdown-toggle");
    $("#account").attr("data-toggle", "dropdown");
  } else {
    //alert("not login");
    $("#account").attr("href", "/login.html");
  }
});
