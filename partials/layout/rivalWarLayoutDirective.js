angular.module('projectWeb').directive('ngTranslateLanguageSelect',
  function (rivalWarLayoutService) {
    'use strict';

    return {
      restrict: 'A',
      replace: true,
      template: ''
      + '<div ng-if="visible" class="form-group">'
      + '<select class="form-control select2" ng-model="currentLocaleDisplayName"'
      + 'ng-options="localesDisplayName for localesDisplayName in localesDisplayNames" ng-change="changeLanguage(currentLocaleDisplayName)">'
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

angular.module('projectWeb').directive('signInModal', function () {
  return {
    restrict: "A",
    replace: true,
    transclude: true,
    templateUrl: './partials/layout/contents/rivalWar/signIn.html',
    scope: true,
    link: function postLink(scope, element, attrs) {
      scope.$watch(attrs.visible, function (value) {
        if (value == true)
          $(element).modal('show');
        else
          $(element).modal('hide');
      });
      $(element).on('shown.bs.modal', function () {
        scope.$apply(function () {
          scope.$parent[attrs.visible] = true;
        });
      });
      $(element).on('hidden.bs.modal', function () {
        scope.$apply(function () {
          scope.$parent[attrs.visible] = false;
        });
      });
    }
  }
});

angular.module('projectWeb').directive('specTable', function () {
  return {
    restrict: "E",
    replace: true,
    transclude: true,
    templateUrl: './partials/layout/contents/rivalWar/specTable.html'
  }
});

angular.module('projectWeb').directive('specTableReverse', function () {
  return {
    restrict: "E",
    replace: true,
    transclude: true,
    templateUrl: './partials/layout/contents/rivalWar/specTableReverse.html'
  }
});
