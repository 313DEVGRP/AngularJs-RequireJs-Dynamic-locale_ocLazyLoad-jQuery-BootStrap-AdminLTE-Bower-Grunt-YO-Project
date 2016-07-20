'use strict';
define(['projectWeb'
], function() {
  var frontendDevelopers = angular.module('projectWeb', []);

  frontendDevelopers
  .directive('frontendDevLeft',function(){
    return{
      templateUrl : "partials/layout/contents/DEV/stakeholder/frontendDevelopers/tmpl/devLeftTmpl.html",
      restrict : "A",
      scope :{
        customInfo:"=info"
      }
    };
  });

});
