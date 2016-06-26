
var myApp = angular.module('myApp', []);

var todoList = [
	{done: true, title: "AngularJS 독서"},
	{done: false, title: "AngularJS 공부하기"},
	{done: false, title: "개인 프로젝트 구성"}
];

myApp.controller('TodoController', ['$scope', function($scope) {
	$scope.appName = 'AngularJS ToDo App';
	$scope.todoList = todoList;
	
	$scope.addNewTodo = function(newTitle) {
		todoList.push({done: false, title: newTitle});
		$scope.newTitle= '';
		//alert(todo.title);
	};
	$scope.archive = function() {
		for (var i = $scope.todoList.length -1; i >= 0; i--) {
			if($scope.todoList[i].done){
				$scope.todoList.splice(i, 1);
			}
		}
	};
	$scope.remain = function() {
		var remainCount = 0;
		angular.forEach($scope.todoList, function(value, key) {
			if(value.done === false) {
				remainCount++;
			}
		});
		return remainCount;
	};
}]);

var menuList = [
	{itemId: 1, itemName: '샌드위치', itemPrice: 2000, itemCount: 0},
	{itemId: 2, itemName: '아메리카노', itemPrice: 1000, itemCount: 0},
	{itemId: 3, itemName: '카푸치노', itemPrice: 1500, itemCount: 0}
];
myApp.controller('mainCtrl', ['$scope', function($scope){
	
	$scope.menuList = menuList;
	$scope.totalPrice = 0;
	$scope.buy = function() {
		$scope.totalPrice = 0;
		angular.forEach($scope.menuList, function(menu, idx){
			$scope.totalPrice = $scope.totalPrice + (menu.itemPrice * Number(menu.itemCount));
		});
	};
}]);
var customerList = [{name: '영희', age: 10}, {name: '순희', age: 28}];
var youngCusterList = [];
myApp.controller('customerCtrl', ['$scope', function($scope) {
	
	angular.forEach(customerList, function(value, key){
		if(value.age < 18){
			youngCusterList.push(value);
		}
	});
	$scope.customerList = customerList;
	$scope.youngCusterList = youngCusterList;
}]);
myApp.controller('selectCtrl', ['$scope', function($scope){
	$scope.countryList = [
		{name:'한국', code:'KR', continent:'아시아'}, 
		{name:'일본', code:'jr', continent:'아시아'}, 
		{name:'미국', code:'en', continent:'북미'}
	];
}]);
myApp.controller('mainCtrl2', ['$scope', function($scope){
	$scope.message = '';
	$scope.eventCnt = '';
	$scope.handleEvt = function(message){
		$scope.message = message;
		$scope.eventCnt++;
	}
}]);
myApp.controller('mainCtrl3', ['$scope', function($scope){
	$scope.bgStyle = {
		backgroundColor:'red'
	};
	$scope.changeColor = function(color) {
		$scope.bgStyle.backgroundColor = color;
	};
}]);