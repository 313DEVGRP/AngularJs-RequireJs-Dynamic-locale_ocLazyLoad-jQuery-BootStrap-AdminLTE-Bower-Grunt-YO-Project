'use strict';

var app=angular.module('projectWeb',[]);
app.controller('todoCtrl', function($scope){
  $scope.appName="AngularJS TODO APP";
  $scope.todoList=[
   { done : true, title : "AngularJS 독서"},
   { done : false, title : "AngularJS 공부하기"},
   { done : false, title : "개인 프로젝트 구성"}
  ];
  $scope.addNewItem=function(){
    $scope.todoList.push({done:false, title:$scope.newTitle});
    $scope.newTitle="";
  };
  $scope.archive=function(){
    for(var i=$scope.todoList.length-1; i>=0; i--){
      if($scope.todoList[i].done)
      $scope.todoList.splice(i,1);
    }
  };
  $scope.remain=function(){
    var remainCount=0;
    angular.forEach($scope.todoList, function(value, index){
      if(!value.done){
        remainCount++;
      }
    });
    return remainCount;
  };
});

app.controller('menuCtrl',function($scope){
  var item=[
    {itemId: 1, menu:'샌드위치', cost:'2000', count:0},
    {itemId:2, menu:'아메리카노', cost:'1000', count:0},
    {itemId:3, menu:'카푸치노', cost:'1500', count:0},
  ];
  $scope.item=item;
  $scope.totalPrice=0;//없으면 초기값이 없어서 총액에 아무것도 안찍힘
  $scope.buy=function(){
    $scope.totalPrice=0;//초기화를 안해주면 이전값을 가지고있어서 계산할 수록 누적됨
    angular.forEach($scope.item, function(menu, idx){
      $scope.totalPrice=$scope.totalPrice+ (menu.cost*menu.count);
    });
  };
});

app.controller('customer',function($scope){
  var customers=[
    {name:'김수현',age:'29'},
    {name:'유아인',age:'31'},
    {name:'주원',age:'30'}
  ];
  $scope.customers=customers;
  var customObj={
    name:'송중기',
    age:'32',
    job:'배우'
  };
  var star=['이동현','우규민','박용택'];
  $scope.star=star;

});
