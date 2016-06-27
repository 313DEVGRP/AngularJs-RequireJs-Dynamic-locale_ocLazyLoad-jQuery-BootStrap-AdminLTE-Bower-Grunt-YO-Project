/**
 * Created by mac on 2016. 6. 20..
 */
/**
 * Created by mac on 2016. 6. 19..
 */
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

var userList = [
    {
        name: '정수영',
        email: 'soorichu@gmail.com',
        password: '123456789',
        regDate: '2016-06-19'
    },
    {
        name: '권슬기',
        email: '',
        password: '',
        regDate: '2016-06-10'
    },
    {
        name:'함수원',
        email: '',
        password: '',
        regDate: '2016-06-07'
    },
    {
        name:'최세훈',
        email: '',
        password: '',
        regDate:'2016-06-20'
    }

];
var app1 = angular.module('beeersApp', ['ngRoute', 'ngAnimate']);

app1.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/welcome', {templateUrl: 'welcome.html', controller:'welcomeCtrl'})
        .when('/login', {templateUrl: 'login.html', controller:'loginCtrl'})
        .when('/userList', {templateUrl: 'userList.html', controller:'userListCtrl'})
        .when('/todoApp', {templateUrl: 'todoApp.html', controller:'todoCtrl'})
        .when('/signUp', {templateUrl: 'signUp.html', controller:'signCtrl'})
        .when('/mathApp', {templateUrl: 'mathApp.html', controller:'mathCtrl'})
        .otherwise({redirectTo: '/welcome'});
    $locationProvider.html5Mode(true);
}])
    .controller('MainCtrl', ['$route', '$routeParam', '$location', function($route, $routeParams, $location){
        this.$route = $route;
        this.$location = $location;
        this.$routeParams = $routeParams;
    }]);

var app2 = angular.module('beeersApp', []);
app2.controller('userListCtrl', ['$scope', function($scope){
    $scope.userList = userList;

}]);


app2.controller('loginCtrl', ['$scope', '$window', function($scope, $window){
    $scope.id = "";
    $scope.password="";
    $scope.doGreeting = function(id){
        $window.alert("환영합니다!");
    };
    $scope.goSignUp = function(){
        $window.href('signUp.html');
    };

}]);


app2.controller("todoCtrl", ['$scope', function($scope) {
    $scope.appName = "Todo App";
    $scope.todoList = todoList;
//    $scope.person = person;
//    $scope.menuList = menuList;

    $scope.buttonAddTodo = function () {
        if ($scope.newTitle == '' || $scope.newTitle == null) {
            alert("추가할 일을 입력해주세요");
        } else {
            $scope.addTodo();
        }
    };

    $scope.keyAddTodo = function () {
        if (event.keyCode == 13 && $scope.newTitle) {
            $scope.addTodo();
        }
    };

    $scope.addTodo = function () {
        $scope.todoList.push({title: $scope.newTitle, done: false});
        $scope.newTitle = '';
    };

    $scope.deleteTodo = function () {

        for (var i = $scope.todoList.length - 1; i >= 0; i--) {
            if ($scope.todoList[i].done) {
                $scope.todoList.splice(i, 1);
            }
        }

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

    $scope.showAllCheck = function () {
        return $scope.todoList.length > 0;
    };

    $scope.toggleAll = function () {
        angular.forEach($scope.todoList, function (todo) {
            todo.done = $scope.markAll;
        });
    };
    $scope.hasDone = function () {
        return ($scope.todoList.length != $scope.remain());
    };
}]);
