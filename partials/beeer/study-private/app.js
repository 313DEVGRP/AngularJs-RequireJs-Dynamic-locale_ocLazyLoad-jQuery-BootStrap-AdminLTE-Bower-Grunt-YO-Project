/**
 * Created by mac on 2016. 6. 25..
 */
augular.module("NoteWrangler", ['ngRoute'])
    .config(['$routeProvider', function($routeProvider){
        $routeProvider
            .when('/notes', {
                templateUrl: '/pages/notes/index.html'
            })
            .when('/users', {
                templateUrl:'/pages/users/index.html'
            })
            .when('/notes/new', {
                templateUrl:'/pages/notes/edit.html'
            })
            .when('/', {
                templateUrl:'/pages/notes/index.html'
            })
            .otherwise({redirectTo:'/'});
    }]);
