angular.module('projectWeb').directive('ngTranslateLanguageSelect',
  function (rivalWarLayoutService) {
    'use strict';

    return {
      restrict: 'A',
      replace: true,
      template: ''
      + '<div ng-if="visible" class="form-group">'
      + '<select class="form-control select2" ng-model="currentLocaleDisplayName"'
      + 'ng-options="localesDisplayName for localesDisplayName in localesDisplayNames" ng-change="changeLanguage(currentLocaleDisplayName)" style="width: 100%;">'
      + '</select>' + '</div>'
      + '<!-- /.form-group -->',
      controller: function ($scope) {
        $scope.currentLocaleDisplayName = rivalWarLayoutService.getLocaleDisplayName();
        $scope.localesDisplayNames = rivalWarLayoutService.getLocalesDisplayNames();
        $scope.visible = $scope.localesDisplayNames && $scope.localesDisplayNames.length > 1;

        $scope.changeLanguage = function (locale) {
          rivalWarLayoutService.setLocaleByDisplayName(locale);
        };
      }//controller end
    };//return end
  }//function end
);
