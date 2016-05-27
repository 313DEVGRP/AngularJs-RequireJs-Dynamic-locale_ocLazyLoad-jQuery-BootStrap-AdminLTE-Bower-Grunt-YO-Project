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
angular.module('firstApp', []).controller('todoCtrl', function($scope) {
    $scope.appName = 'AngularJS TODO APP';
    $scope.todoList = todoList;
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
    }
    
    $scope.toggleAll = function() {
        angular.forEach($scope.todoList, function(todo) {
          todo.done =$scope.markAll;
        });
    };
    $scope.hasDone = function() {
        return ($scope.todoList.length != $scope.remain());
    } 
});