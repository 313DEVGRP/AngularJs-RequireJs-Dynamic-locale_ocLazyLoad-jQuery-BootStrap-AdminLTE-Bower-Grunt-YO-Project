angular.module("todoApp",[])
          .controller("todoCtrl",function($scope){

          var todoList = [
              {done:true, title:"AngularJS 독서"},
              {done:false, title:"AngularJS 공부하기"},
              {done:false, title:"개인 프로젝트 구성"}
          ];

               $scope.appName = "AngluarJS TODO APP";
               $scope.todoList = todoList;
               $scope.addNewTodo = function(newTitle){
                    todoList.push({done:false, title:newTitle});
                        $scope.newTitle = '';
               };
       });