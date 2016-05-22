

var myModule = angular.module("todoApp",[]); // create module 
myModule.controller('todoCtrl', function todoCtrl() {  //controller define - no use scope
	
	alert("todoCtrl start ::::::::::::::::");

	var todo = this;

	todo.todoList = [

		{done : true , title : "AngularJS 독서"} ,
		{done : false, title : "AngularJS 공부하기" },
		{done : false, title : "개인프로젝트 구성"}

	];

	//$scope.name = "AngularJS TODO APP";

	/*
	$scope.name = "AngularJS TODO APP";
	$scope.todoList = [

		{done : true , title : "AngularJS 독서"} ,
		{done : false, title : "AngularJS 공부하기" },
		{done : false, title : "개인프로젝트 구성"}

	];
	
	$scope.addNewTodo = function(newTitle){
		$scope.todoList.push({done:false,title:newTitle}); //todoList add 
		//$scope.newTitle = '';
		
	};
	*/
	
	todo.name = "AngularJS TODO APP";

	

	todo.addNewTodo = function(newTitle){

		//alert("addNewTodo:::::::::::");
		todo.todoList.push(
		  {
		   done:false ,
		   title:newTitle
		  }
		 ); //todoList add 
		
		
	};


})

