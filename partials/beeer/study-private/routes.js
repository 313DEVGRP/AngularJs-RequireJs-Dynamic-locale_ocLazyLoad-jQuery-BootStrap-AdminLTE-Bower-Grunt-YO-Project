/**
 * Created by mac on 2016. 6. 25..
 */

/*
 1. using ngView
 2. loading the ugRoute lib
 3. Importing ngRoute Module
 4. Defining routes
 -  .when(path, route);
 -  .otherwise(params);



angular.module('NoteWrangler')
    .config(function($routeProvider){
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
});
*/
