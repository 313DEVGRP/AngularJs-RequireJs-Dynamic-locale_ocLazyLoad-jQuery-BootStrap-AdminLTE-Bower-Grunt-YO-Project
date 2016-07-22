'use strict';
define(
        ['projectWeb'],
        function() {
          var frontendDevelopers = angular.module('projectWeb', ['ui.router',
              'oc.lazyLoad', 'frontendDevelopersService', 'devLayoutService']);

          frontendDevelopers
                  .directive(
                          'frontendDevLeft',
                          function() {
                            return {
                              templateUrl: 'partials/layout/contents/DEV/stakeholder/frontendDevelopers/tmpl/devLeftTmpl.html',
                              restrict: 'EA',
                              scope: {
                                customInfo: '=info'
                              }
                            };
                          });

        });
