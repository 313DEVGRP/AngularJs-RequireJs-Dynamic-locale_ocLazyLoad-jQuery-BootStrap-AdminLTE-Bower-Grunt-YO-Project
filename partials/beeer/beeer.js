var todoList = [
  {
    done: false,
    title: "Angular 독서"
  },
  {
    done: false,
    title: "Angular 공부하기"
  },
  {
    done: false,
    title: "개인프로젝트구성"
  }

];
var person = {
  name: 'beeer',
  favorite : ['사과', '딸기', '포도']
};

var menuList = [
  {itemId: 1, itemName: '샌드위치', itemPrice:2000, itemCount:0},
  {itemId: 2, itemName: '아메리카노', itemPrice:1000, itemCount:0},
  {itemId: 3, itemName: '카푸치노', itemPrice: 1500, itemCount: 0}
];


var app = angular.module('firstApp', []);

app.controller('todoCtrl', function($scope) {
  $scope.appName = 'AngularJS TODO APP';
  $scope.todoList = todoList;
//    $scope.person = person;
//    $scope.menuList = menuList;

  $scope.buttonAddTodo = function() {
    if($scope.newTitle=='' || $scope.newTitle==null){
      alert("추가할 일을 입력해주세요");
    }else{
      $scope.addTodo();
    }
  };

  $scope.keyAddTodo = function() {
    if(event.keyCode == 13 && $scope.newTitle){
      $scope.addTodo();
    }
  };

  $scope.addTodo = function() {
    $scope.todoList.push({title:$scope.newTitle, done:false});
    $scope.newTitle = '';
  };
  /*
   $scope.addNewTodo = function (newTitle) {
   todoList.push({
   done: false,
   title: newTitle
   });
   $scope.newTitle = '';
   };*/
  $scope.deleteTodo = function () {

    for (var i = $scope.todoList.length - 1; i >= 0; i--) {
      if ($scope.todoList[i].done) {
        $scope.todoList.splice(i, 1);
      }
    };

  };
  $scope.remain = function () {
    var remainCount = 0;
    angular.forEach($scope.todoList, function (value, key) {
      if (value.done === false) {
        remainCount++;
      }
    });
    return remainCount;
  };

  $scope.showAllCheck = function(){
    return $scope.todoList.length > 0;
  };

  $scope.toggleAll = function() {
    angular.forEach($scope.todoList, function(todo) {
      todo.done =$scope.markAll;
    });
  };
  $scope.hasDone = function() {
    return ($scope.todoList.length != $scope.remain());
  };
  /*
   //메뉴판에서 쓰는 함수들
   var menuListTpl = $("#menuListTpl").html();
   var invoiceTpl = $("#invoiceTpl").html();

   var menuListHtml = Mustache.render(menuListTpl, menuList);
   var invoiceHtml = Mustache.render(invoiceTpl, {totalPrice:0});

   var invoiceEl = $("#invoice").html(invoiceHtml);
   $("#menu-list").html(menuListHtml);
   $("#addContract").click(function(){
   var totalPrice = 0;
   for(var i=menuList.length-1;i>=0; i--){

   $itemEl = $("item-id-"+menuList[i].itemId);
   var price = menuList[i].itemPrice;
   var count= $itemEl.find("#item-count").val();
   totalPrice = totalPrice + (price * Number(count));
   };
   invoiceEl.html(Mustache.render(invoiceTpl, {totalPrice:totalPrice}));
   });
   */

});

app.controller('mainCtrl', function($scope) {
  $scope.menuList = menuList;
  $scope.totalPrice = 0;
  $scope.totalText = "구매한 것 없음";
  $scope.buy = function(){
    $scope.totalPrice = 0;
    $scope.totalText = "";
    angular.forEach($scope.menuList, function(menu){
      $scope.totalPrice += (menu.itemPrice * Number(menu.itemCount));
      if(Number(menu.itemCount)>0){
        if($scope.totalText.length >0){
          $scope.totalText += ", ";
        }
        $scope.totalText += menu.itemName+" "+menu.itemCount+"개";
      }
    });
  };
  $scope.reset = function(){
    angular.forEach($scope.menuList, function(menu){
      menu.itemCount = 0;
    });
    $scope.totalPrice = 0;
    $scope.totalText = "구매한 것 없음"
  };


});

app.controller('mainCtrl2', function($scope){
  $scope.message = "";
  $scope.eventCnt = 0;
  $scope.handleEvt = function(message){
    $scope.message = message;
    $scope.eventCnt++;
  }
});

app.controller('mainCtrl3', function($scope){

  $scope.bgStyle={
    backgroundColor: 'red'
  };
  $scope.changeColor = function(color){
    $scope.bgStyle.backgroundColor = color;
  };
});


app.contoller('mainCtrl4', function($scope){
  $scope.broadcast = function(noticeMsg){
    $scope.$broadcast("chat:noticeMsg", noticeMsg);
    $scope.noticeMsg = "";
  };

  function chatMsgListCtrl($scope, $rootScope){
    $scope.msgList = [];
    $rootScope.$on("chat:newMsg", function(e, newMsg){
      $scope.msgList.push(newMsg);
    });
    $scope.$on("chat:noticeMsg", function(e, noticeMsg){
      $scope.msgList.push("[공지] "+noticeMsg);
    });
  }

  function chatMsgInputCtrl($scope){
   $scope.submit = function(newMsg){
     $scope.$emit("chat:newMsg", newMsg);
     $scope.newMsg = "";
   };
  }
});

angular.module('ngBookmark', []).controller("bookmarkListCtrl", ['$scope', function($scope){
  $scope.bookmarkList=[
    {id:"google", name:"구글", url:"www.google.com"},
    {id:"naver", name:"네이버", url:"www.naver.com"},
    {id:"daum", name:"다음", url:"www.daum.net"}
  ];
}])

angular.module('cookieDemo', ['ngCookies']).controller("mainCtrl5", ['$scope', '$cookieStore', function($scope, $cookieStore){
  $scope.value = $cookieStore.get("test") || "없음";
  $scope.getValue = function(){
    $scope.value = $cookieStore.get("test");
  };
  $scope.putValue = function(iV){
    $cookieStore.put("test", iV);
  };
}]);
