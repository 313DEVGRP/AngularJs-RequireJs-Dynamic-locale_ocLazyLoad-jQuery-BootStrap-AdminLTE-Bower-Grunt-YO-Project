/**
 * Created by mac on 2016. 6. 19..
 */
/*
var navList = [
    {title: "홈", href: "welcome.html"},
    {title: "1. 모듈", href:"six_module.html"},
    {title: "2. 컨트롤러", href:"six_module_2.html"},
    {title: "3. 파일구조", href:"six_module_3.html"},
//    {title: "북마크", href:"bookmark.html"},
//    {title:"쿠키데모", href:"cookies.html"},
    {title:"사용자관리", href:"userList.html"},

    {title:"MATH APP", href:"mathApp.html"},
    {title:"가입하기", href:"signUp.html"}
];
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
        .when('/six_module', {templateUrl: 'six_module.html', controller:''})
        .when('/six_module_2', {templateUrl: 'six_module_2.html', controller:''})
        .when('/six_module_3', {templateUrl: 'six_module_3.html', controller:''})
        .when('/six_module_4', {templateUrl: 'six_module_4.html', controller:''})
        .when('/six_module_5', {templateUrl: 'six_module_5.html', controller:''})
        .when('/six_module_6', {templateUrl: 'six_module_6.html', controller:''})

        //   .when('/bookmark', {templateUrl: 'bookmark.html', controller:'bookmarkCtrl'})
     //   .when('/cookies', {templateUrl: 'cookies.html', controller:'cookiesCtrl'})

        .otherwise({redirectTo: '/welcome'});
    $locationProvider.html5Mode(true);
}])
    .controller('MainCtrl', ['$scope','$route', '$routeParam', '$location', function($scope, $route, $routeParams, $location){
        this.$route = $route;
        this.$location = $location;
        this.$routeParams = $routeParams;
        $scope.show = false;

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

/*
app2.controller('bookmarkCtrl',['$scope',function($scope){

    $scope.bookmarkList= bookmarkList;

}]);

var app3 = angular.module('beeersApp', ['ngCookies']);

app3.controller('cookiesCtrl',['$scope', '$cookies', function($scope,$cookies){

    $scope.value = $cookies.get("test")||"없음";

    $scope.getValue = function(){
        $scope.value = $cookies.get("test");
    };

    $scope.putValue = function(iV){
        $cookies.put("test",iV);
    };
}]);
