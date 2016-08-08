'use strict';
angular
        .module("projectWeb", [])
        .directive(
                "ngTranslateLanguageSelect",
                function(devLayoutService) {
                  return {
                    restrict: 'A',
                    replace: true,
                    template: ''
                            + '<div class="language-select" ng-if="visible">'
                            + '<label>'
                            + '{{"directives.language-select.Language" | translate}}:'
                            + '<select ng-model="currentLocaleDisplayName"'
                            + 'ng-options="localesDisplayName for localesDisplayName in localesDisplayNames"'
                            + 'ng-change="changeLanguage(currentLocaleDisplayName)">'
                            + '</select>' + '</label>' + '</div>' + '',
                    controller: function($scope) {
                      $scope.currentLocaleDisplayName = devLayoutService
                              .getLocaleDisplayName();
                      $scope.localesDisplayNames = devLayoutService
                              .getLocalesDisplayNames();
                      $scope.visible = $scope.localesDisplayNames
                              && $scope.localesDisplayNames.length > 1;

                      $scope.changeLanguage = function(locale) {
                        devLayoutService.setLocaleByDisplayName(locale);
                      };
                    }
                  };
                });
