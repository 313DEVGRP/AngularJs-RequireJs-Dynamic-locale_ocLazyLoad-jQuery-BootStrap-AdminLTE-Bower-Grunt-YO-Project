// var todoList = [
//  { done : true, title : "AngularJS 독서"},
//  { done : false, title : "AngularJS 공부하기"},
//  { done : false, title : "개인 프로젝트 구성"}
// ];
//
// function todoCtrl ($scope) {
//  $scope.appName = 'AngularJS TODO APP';
//  }

var app=angular.module('myApp',[]);
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
