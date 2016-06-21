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
    var menuList = [
        {itemId : 1, itemName : '샌드위치', itemPrice: 2000, itemCount:0},
        {itemId : 2, itmeName : '아메리카노', itemPrice: 1000, itemCount:0},
        {itemId : 3, itemName : '카푸치노', itemPrice: 1500, itemCount:0}
    ]
    $scope.menuList = menuList;
    $scope.totalPrice = 0;

    $scope.buy = function(){
        $scope.totalPrice = 0;

        angular.forEach($scope.menuList, function(menu, idx)
            $scope.totalPrice = $scope.totalPrice + (menu.itemPrice * Number(menu.itemCount));
        )};
});

function customerCtrl ($scope){
    var customerList = [{name:'봄이'},age:10},{name:'여름이',age:5}];
    var youngCusterList = [];
    angular.forEach(customerList, function(value,key){
        if(value.age < 15){
            youngCusterList.push(value);
        }
    });
    $scope.customerList = customerList;
    $scope.youngCusterList = youngCusterList;
}