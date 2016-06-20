var todoList = [
    {done: true,title: "AngularJS 독서"},
    {done: false,title: "AngularJS 공부하기"},
    {done: false,title: "개인 프로젝트 구성"}
];

var app = angular.module('jsTree', []);
app.controller('todoCtrl', function($scope) {
    $scope.appName = 'AngularJS TODO APP';
    $scope.todoList = todoList;
    $scope.addNewTodo = function (newTitle) {
        todoList.push({
            done: false,
            title: newTitle
        });
        $scope.newTitle = '';
    };
    $scope.archive = function () {
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
