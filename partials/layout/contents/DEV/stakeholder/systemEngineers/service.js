'use strict';

define(['projectWeb'], function() {

    var systemEngineersServiceModule = angular.module('systemEngineersServiceModule', []);

    systemEngineersServiceModule.factory('systemEngineersService', ['$rootScope',
        function($rootScope) {
            return {
                fire: function() {
                        console.log('systemEngineers');
                    } //fire end
            }; //return end
        }
    ]); //.define function end
});
