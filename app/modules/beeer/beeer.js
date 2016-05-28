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
    $scope.buy = function(){
      $scope.totalPrice = 0;
        angular.forEach($scope.menuList, function(menu, idx){
            $scope.totalPrice += (menu.itemPrice * Number(menu.itemCount));
        });

    };
});