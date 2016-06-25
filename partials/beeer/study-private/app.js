/**
 * Created by mac on 2016. 6. 22..
 */
(function(){
    var app = angular.module('store', []);
    app.controller('StoreController', function(){
        this.products = gems;
    });
    var gems = [
        {name: 'Azurite', price :25},
        {name: 'BloodStone', price :50},
        {name: 'Zircon', price :40}

    ];
})();