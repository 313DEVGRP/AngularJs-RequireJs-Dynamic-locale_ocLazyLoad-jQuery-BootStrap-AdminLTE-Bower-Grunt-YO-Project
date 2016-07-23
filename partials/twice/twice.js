'use strict';

$(document).ready(function(){
    $(".nav-tabs a").click(function(){ // boostrab tab event
        $(this).tab('show');
    });

    $('.dropdown-toggle').dropdown()
   
    /*$('.nav-tabs a').on('shown.bs.tab', function(event){
        var x = $(event.target).text();         // active tab
        var y = $(event.relatedTarget).text();  // previous tab
        $(".act span").text(x);
        $(".prev span").text(y);
    });*/
});



var myModule = angular.module('myApp', []); //myApp modeul create

myModule.controller('todoCtrl', function ($scope) { //todo App Controller 
    
    $scope.appName = 'AngularJS To do App';

    var todoList = [
            {done:true, title: "angular 독서"},
            {done:false, title: "angular 스터디"},
            {done:false, title: "개인 프로젝트 구성"}
    ];

    $scope.todoList = todoList;

    // 추가
    $scope.addNewTodo = function(newTitle){
        todoList.push({done:false, title:newTitle});
        $scope.newTitle = "";
    }

    // 보관
    $scope.archive = function(){
        for(var i=$scope.todoList.length-1; i>=0; i--){
            //console.log(i);
            if($scope.todoList[i].done){
                $scope.todoList.splice(i,1);
            }
        }
    }

    // 남은 개수
    $scope.remain = function(){
        var remainCount = 0;
        angular.forEach($scope.todoList, function(value, key){
            if(value.done === false){
                remainCount++;
            }
        });
        return remainCount;
    }

    // 보관중인 목록
    // $scope.doneTodo = function(){    
    //  for(var i=$scope.todoList.length-1; i>=0; i--){
    //      //console.log(i);
    //      if($scope.todoList[i].done == true){
    //          var add = $scope.todoList[i];
    //          var doneArray = $scope.doneList.splice(i,0,add);
    //          console.log(doneArray);
    //      }
    //      return doneArray;
    //  }
    // }

});

myModule.controller('mainCtrl',function ($scope) {
    
    var menuList = [
                {itemId:1, itemName: '샌드위치'  ,  itemPrice: 2000 , itemCount : 0 },
                {itemId:2, itemName: '아메리카노',   itemPrice: 1000, itemCount : 0},
                {itemId:3, itemName: '카푸치노',   itemPrice: 1500,  itemCount : 0}
              
             ];
     
      $scope.menuList = menuList;
      $scope.totalPrice = 0;
      $scope.buy = function () {
            $scope.totalPrice = 0;

            angular.forEach($scope.menuList, function(menu,idx){

                $scope.totalPrice = $scope.totalPrice + (menu.itemPrice * Number(menu.itemCount));
            });
      }
});



myModule.controller('customerCtrl', function ($scope) {
    
    var customerList = [{name:'영희', age:10}, {name:'순희', age:28}];
    var youngCusterList = [];
    angular.forEach(customerList, function(value, key){

        if(value.age < 18){
            youngCusterList.push(value);
        }

    });

    $scope.customerList = customerList;
    $scope.youngCusterList = youngCusterList;
});




//05.scope
myModule.controller('parentCtrl', function ($scope) {
    $scope.parent = {name:"parent Kim"};
});
myModule.controller('childCtrl', function ($scope) {
    
    $scope.child = {name:"child Ko"};
    
    $scope.changeParentName=function(){
        $scope.parent.name="another Kim";
    };
});
// ~ scope end

//05.user-defined 
myModule.controller('userController', function ($scope) {
    
    $scope.broadcast=function(noticeMsg){
        $scope.$broadcast("chat:noticeMsg", noticeMsg);
        $scope.noticeMsg="";
    };
});

myModule.controller('chatMsgListCtrl', function ($scope, $rootScope) {
    $scope.msgList=[];

    $rootScope.$on("chat:newMsg", function(e, newMsg){
        $scope.msgList.push(newMsg);
    });
    
    $scope.$on("chat:noticeMsg", function(e, noticeMsg){
        $scope.msgList.push("[공지]"+noticeMsg);
    });
});

myModule.controller('chatMsgInputCtrl', function ($scope) {

    $scope.submit=function(newMsg){
        $scope.$emit("chat:newMsg", newMsg);
        $scope.newMsg="";
    };
});
// ~ user-defined end 



//07.getStyle
myModule.controller('getStyleCtrl', function ($scope) {
    
    $scope.getStyle=function(){
        return {"color":"red"}
    };
});


myModule.directive('directive01', function(){
        return function(scope, iElement, iAttrs, controller){
            iElement.html("<h1>directive01 "+iAttrs.name+"</h1>")
        };
    });


myModule.directive('directive02', function($log){
        return {
            name:0,
            priority:0,
            template: '<div></div>',
            replace: false,
            transclude: false,
            restrict: 'A',
            scope: false,
            controller: function($scope, $element, $attrs, $transclude){
            },
            compile: function compile(tElement, tAttrs){
                return{
                    pre: function preLink(scope, iElement, iAttrs, controller){
                        iElement.html("<h1>directive02 "+iAttrs.name+"</h1>")
                    },
                    post: function postLink(scope, iElement, iAttrs, controller){
                        $log.log("<h1>directive02 "+iAttrs.name+"</h1>");
                    }
                }
                
            }
        };
    });

myModule.directive('directive03', function(){
        return {
            template:"<h1>directive03 <span>name</span></h1>",
            restrict:"AE",
            link: function link(scope, iEl, iAt, ctrl){
                iEl.find("span").text(iAt.name);
            }
        }
    });




myModule.controller('directiveScopeCtrl01', ['$scope', function($scope){
    $scope.name="Ctrl에서 사용된 name 모델";
}])
.directive('hello1', function(){
    return{
        templateUrl:"template.html",
        restrict:"AE",
        scope: true,
        controller: function($scope, $element, $attrs, $transclude){
            if($attrs.name) $scope.name=$attrs.name;
        }
    
    };
});
    

myModule.controller('directiveScopeCtrl02', ['$scope', function($scope){
    $scope.name="Ctrl에서 사용된 name 모델";
}])
.directive('hello2', function(){

        return{
            replace: true,
            templateUrl:"template.html",
            restrict:"AE",
            scope: {name:"@name"} 
        };

    
});


myModule.factory('hello', [ function(){

    var helloText = "님 안녕하세요";
    
    return {
        say : function (name) {
            return name + helloText;
        }
    };
}]);

// .controller('helloCtrl', function($scope, hello){
   
//     $scope.hello = hello.say("철철수");
// });

myModule.controller('helloCtrl', function($scope, hello){   
    $scope.hello = hello.say("철철수");
});

myModule.value('AppNm', 'demo app').controller('serviceCtrl01', function($scope, AppNm){
    $scope.appNm = AppNm;
});


myModule.factory('AppNm', [function () {
    return 'demo app';
}]).factory('UserResource', function () {
      var userList = [];
      return {
        addUser : function(newUser) {
          userList.push(newUser);
        },
        updateUser : function(idx, updatedUser) {
          userList[idx] = updatedUser;
        },
        deleteUser : function(idx) {
          userList[idx] = undefined;
        },
        selectUsers : function() {
          return userList;
        }
      }
    }).
    controller('serviceCtrl02',function($scope, AppNm, UserResource) {
      $scope.appNm = AppNm;
      $scope.users = UserResource.selectUsers();
      $scope.addNewUser = function(newUser) {
        UserResource.addUser({
          name : newUser.name,
          email : newUser.email
        });
      };
    });



 function Calculator () {
    this.lastValue = 0;
    this.add = function(a,b) {
      var returnV = a+b;
      this.lastValue = returnV;
      return returnV;
    };
    this.minus = function(a,b) {
      var returnV = a-b;
      this.lastValue = returnV;
      return returnV;
    };
  }
  
myModule.factory('CalcByF', [function () {
      return new Calculator();
    }]).
    service('CalcByS', Calculator)
    .controller('serviceCtrl03',function($scope, CalcByS, CalcByF) {
      $scope.val1 = CalcByF.add(10,3);
      console.log(CalcByF.lastValue);
      $scope.val2 = CalcByS.minus(20,10);
      console.log(CalcByS.lastValue);
    });



myModule.provider('Logger', [function () {

  function Logger(msg) {
    if(checkNativeLogger) console.log(msg);
  }

  Logger.debug = function(msg) { if(checkNativeLogger) console.debug(msg) };
  Logger.info = function(msg) { if(checkNativeLogger) console.info(msg) };
  
  function checkNativeLogger() {
    if(console) return true
    return false;
  }
  
  this.$get = [function() {
    return Logger;
  }];
}]).
controller('serviceCtrl04',function($scope, Logger) {
  Logger("console.log로 출력하는 로그메시지");
  Logger.debug("console.debug 출력하는 로그메시지");
});    



myModule.provider('Logger', [function () {
      var defaultLogLevel = 'log';
      function Logger(msg) {
        if(checkNativeLogger) {
          if(defaultLogLevel === "debug"){
            console.debug(msg);
            return;
          }
          if(defaultLogLevel === "info"){
            console.info(msg);
            return;
          }
          console.log(msg);
        }
      }
      Logger.debug = function(msg) { if(checkNativeLogger) console.debug(msg); };
      Logger.info = function(msg) { if(checkNativeLogger) console.info(msg); };
      function checkNativeLogger() {
        if(console) return true
        return false;
      }
      this.setDefaultLevel = function(level) {
        switch(level){
          case 'debug': 
            defaultLogLevel = 'debug';
            break;
          case 'info':
            defaultLogLevel = 'info';
            break;
          default:
            defaultLogLevel = 'log'
        }
      };
      this.$get = [function() {
        return Logger;
      }];
    }]).
    config(['LoggerProvider',function (LoggerProvider) {
      LoggerProvider.setDefaultLevel("debug");
    }]).
    controller('serviceProviderCtrl',function($scope, Logger) {
      Logger("console.log로 출력하는 로그메시지 :::::::::");
      Logger.debug("console.debug 출력하는 로그메시지  ::::::::: ");
    });

