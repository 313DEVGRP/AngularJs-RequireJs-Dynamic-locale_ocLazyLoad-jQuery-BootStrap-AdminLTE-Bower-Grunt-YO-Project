'use strict';

define(['projectWeb'], function() {

  var devLayoutServiceModule = angular.module('devLayoutServiceModule', []);

  devLayoutServiceModule.factory('devLayoutService', [
      '$translate',
      '$rootScope',
      'tmhDynamicLocale',
      'LOCALES',
      function($translate, $rootScope, tmhDynamicLocale, LOCALES) {
        // VARS
        var localesObj = LOCALES.locales;

        // locales and locales display names
        var _LOCALES = Object.keys(localesObj);
        if (!_LOCALES || _LOCALES.length === 0) {
          console.error('There are no _LOCALES provided');
        }
        var _LOCALES_DISPLAY_NAMES = [];
        
        _LOCALES.forEach(function(locale) {
          _LOCALES_DISPLAY_NAMES.push(localesObj[locale]);
        });

        var currentLocale = $translate.proposedLanguage();

        // METHODS
        var checkLocaleIsValid = function(locale) {
          return _LOCALES.indexOf(locale) !== -1;
        };

        var setLocale = function(locale) {
          if (!checkLocaleIsValid(locale)) {
            console.error('Locale name "' + locale + '" is invalid');
            return;
          }
          startLoadingAnimation();
          currentLocale = locale;
          $translate.use(locale);
        };

        /**
         * Stop application loading animation when translations are loaded
         */
        var $html = angular.element('html');
        var LOADING_CLASS = 'app-loading';

        function startLoadingAnimation() {
          $html.addClass(LOADING_CLASS);
        }

        function stopLoadingAnimation() {
          $html.removeClass(LOADING_CLASS);
        }

        // EVENTS
        $rootScope.$on('$translateChangeSuccess', function(event, data) {
          document.documentElement.setAttribute('lang', data.language);// sets
          tmhDynamicLocale.set(data.language.toLowerCase().replace(/_/g, '-'));// load
        });

        $rootScope.$on('$localeChangeSuccess', function() {
          stopLoadingAnimation();
        });

        return {
          fire: function() {

            $.AdminLTE.layout.activate();

            $(".sidebar-menu li a").click(function() {
              $('li .active').removeClass('active');
              $(this).parent().addClass('active');
            });

          },// fire end
          getLocaleDisplayName: function() {
            return localesObj[currentLocale];
          },
          setLocaleByDisplayName: function(localeDisplayName) {
            setLocale(_LOCALES[_LOCALES_DISPLAY_NAMES
                    .indexOf(localeDisplayName)// get locale index
            ]);
          },
          getLocalesDisplayNames: function() {
            return _LOCALES_DISPLAY_NAMES;
          }
        };// return end
      }]);// .define function end
});
