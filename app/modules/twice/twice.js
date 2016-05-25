
//var myModule = angular.module("todoApp",[]); // create module 

angular.module('myApp', []).controller('todoCtrl',todoCtrl);

var todoList = [
	{done:true, title: "angular 독서"},
	{done:false, title: "angular 스터디"},
	{done:false, title: "개인 프로젝트 구성"}
];

function todoCtrl($scope){
	$scope.appName = 'AngularJS To do App';
	$scope.todoList = todoList;

	// 추가
	$scope.addNewTodo = function(newTitle){
		todoList.push({done:false, title:newTitle});
		$scope.newTitle = "";
	}

	// 업데이트(삭제)
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

}


