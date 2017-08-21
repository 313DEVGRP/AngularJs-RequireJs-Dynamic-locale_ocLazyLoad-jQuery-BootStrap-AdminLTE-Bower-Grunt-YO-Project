'use strict';

define(['projectWeb'], function () {

    var rivalWarDataServiceModule = angular.module('rivalWarDataServiceModule', []);

    rivalWarDataServiceModule.factory('rivalWarDataService', ['$http',
        function ($http) {
            delete $http.defaults.headers.common['X-Requested-With'];
            return {
                getData: function (url, method, param, callbackFunc) {
                    $http({
                        method: 'GET',
                        url: "/api/jsTreeServiceFramework/security/csrf.do",
                    }).success(function (data) {
                        var tokenName = data._csrf_headerName;
                        var tokenValue = data._csrf_token;
                        param['_csrf'] = tokenValue;
                        $http({
                            method: method,
                            url: url,
                            params: param
                        }).success(function (responseData) {
                            callbackFunc(responseData);
                        }).error(function () {
                            alert("request error");
                        });

                    }).error(function () {
                        alert("csrf error");
                    });

                }
            };

        }]);// .define function end
});
