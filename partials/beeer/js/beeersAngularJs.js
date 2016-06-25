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

var countryList = [
    {name:'한국', continent:'아시아'},
    {name:'일본', continent:'아시아'},
    {name:'미국', continent:'아메리카'},
    {name:'영국', continent:'유럽'},
    {name:'캐나다', continent:'아메리카'},
    {name:'중국', continent:'아시아'}
];

angular.module('beeersApp', ['ngRoute', 'ngAnimate'])
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/welcome', {templateUrl: '../templates/welcome.html', controller:''})
        .when('/login', {templateUrl: '../templates/login.html', controller:'loginCtrl'})
        .when('/todoApp', {templateUrl: '../templates/todoApp.html', controller:'todoCtrl'})
        .when('/signUp', {templateUrl: '../templates/signUp.html', controller:'signCtrl'})
        .when('/mathApp', {templateUrl: '../templates/mathApp.html', controller:'mathCtrl'})
        .when('/six_module', {templateUrl: '../templates/six_module.html', controller:''})
        .when('/six_module_2', {templateUrl: '../templates/six_module_2.html', controller:''})
        .when('/six_module_3', {templateUrl: '../templates/six_module_3.html', controller:''})
        .when('/six_module_4', {templateUrl: '../templates/six_module_4.html', controller:''})
        .when('/six_module_5', {templateUrl: '../templates/six_module_5.html', controller:''})
        .when('/six_module_6', {templateUrl: '../templates/six_module_6.html', controller:''})
        .when('/six_module_7', {templateUrl: '../templates/six_module_7.html', controller:''})
        .when('/six_module_8', {templateUrl: '../templates/six_module_8.html', controller:''})
        .when('/six_module_9', {templateUrl: '../templates/six_module_9.html', controller:''})

        .when('/userList', {templateUrl: '../templates/userList.html', controller:'userListCtrl'})
        .when('/', {templateUrl: '../templates/welcome.html', controller:''})

        //   .when('/bookmark', {templateUrl: 'bookmark.html', controller:'bookmarkCtrl'})
     //   .when('/cookies', {templateUrl: 'cookies.html', controller:'cookiesCtrl'})

        .otherwise({redirectTo: '../templates/welcome.html'});
        $locationProvider.html5Mode(true);
    }])
    .controller('MainCtrl', ['$scope','$route', '$routeParams', '$location', function($scope, $route, $routeParams, $location){
        this.$route = $route;
        this.$location = $location;
        this.$routeParams = $routeParams;
        $scope.show = false;

    }])
    .controller('userListCtrl', ['$scope', function($scope){
     $scope.userList = userList;

    }])
    .controller('loginCtrl', ['$scope', '$window', function($scope, $window){
        $scope.id = "";
        $scope.password="";
        $scope.doGreeting = function(id){
            $window.alert("환영합니다!");
            $window.open('welcome.html');
        };
        $scope.goSignUp = function(){
            $window.open('signUp.html');
        };

        }])
    .controller("signCtrl", ['$scope', '$window', function($scope, $window) {
        $scope.name="";
        $scope.password="";
        $scope.phone="";
        $scope.id="";
        $scope.countryList = countryList;
        $scope.checked=false;
        $scope.value1='동의';
        $scope.value2='미동의';

        $scope.doGreeting = function(name){
            var string = name+"님 가입을 환영합니다!";
            $window.alert(string);
            $window.open('welcome.html');

        };

    }])
    .controller("todoCtrl", ['$scope', function($scope) {
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
.controller('bookmarkCtrl',['$scope',function($scope){

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
*/