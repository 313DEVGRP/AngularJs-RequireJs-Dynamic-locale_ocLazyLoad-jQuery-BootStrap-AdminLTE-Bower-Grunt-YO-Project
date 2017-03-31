'use strict';

define(['projectWeb'], function() {

  var rivalWarLayoutServiceModule = angular.module('rivalWarLayoutServiceModule', []);

  rivalWarLayoutServiceModule.factory('rivalWarLayoutService', [
    '$translate',
    '$rootScope',
    'tmhDynamicLocale',
    'LOCALES',
    function($translate, $rootScope, tmhDynamicLocale, LOCALES) {

      var idx = null;

      // 다국어 처리부 시작.
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

      //다국어 처리부 끝


      //함수 시작.
      return {
        fire: function() {
          var $a = $('body a');

          $a.on('click', function (e) {
            var $this = $(this);
            if($this.attr('href') === "#") e.preventDefault();
          });

          $("#loading").remove();
          $(".requireLoadingText").remove();

          $(".sidebar-menu li a").click(function() {
            $('li .active').removeClass('active');
            $(this).parent().addClass('active');
          });

        },// fire end

        //다국어 처리 함수
        getLocaleDisplayName: function() {
          return _LOCALES_DISPLAY_NAMES[0];
        },
        setLocaleByDisplayName: function(localeDisplayName) {
          setLocale(_LOCALES[_LOCALES_DISPLAY_NAMES
            .indexOf(localeDisplayName)// get locale index
            ]);
        },
        getLocalesDisplayNames: function() {
          console.log('getLocalesDisplayNames :' + _LOCALES_DISPLAY_NAMES);
          return _LOCALES_DISPLAY_NAMES;
        },
        sideView : function(){
          $(window).on({
            resize: function(){
              var winWid = $(window).width(),
                $body = $('body');

              if(winWid < 1024) $body.addClass('sidebar-collapse');
              else if (winWid >= 1025) $body.removeClass('sidebar-collapse');
            }
          }).trigger('resize');
        },
        addOn : function(select){
          select.addClass('on').siblings().removeClass();
        },
        movement : function(el, index, s, e) {
          this.addOn(el.eq(index));
          el.eq(index).css({display:'block', top:s}).stop().animate({top:e},800);
        }
      };// return end
    }]);// .define function end
});
