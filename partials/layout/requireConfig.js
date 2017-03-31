'use strict';

require.config({
  baseUrl: '',
  waitSeconds: 30,

  // Loading Text
  onNodeCreated: function(node, config, moduleName, url) {
    node.addEventListener('load', function() {
      var line = document.createElement("div");
      line.className = "requireLoadingText";
      line.innerHTML = ">> " + moduleName + " has been loaded ( 200 OK )";
      // document.body.appendChild(line);

    });

    node.addEventListener('error', function() {
      var line = document.createElement("div");
      line.className = "requireLoadingText";
      line.innerHTML = ">>" + 'module ' + moduleName + ' could not be loaded';
    });
  },

  // requirejs config
  paths: {
    // jquery
    'jquery': 'lib/jquery/dist/jquery.min',
    'jquery-ui': 'lib/jquery-ui/jquery-ui.min',
    'jquery-migrate': 'lib/jquery-migrate/jquery-migrate.min',

    // twitterBootstrap
    'twitterBootstrap': 'lib/bootstrap/dist/js/bootstrap.min',

    // angular
    'angular': 'lib/angular/angular.min',
    'ngRoute': 'lib/angular-route/angular-route.min',
    'ngAnimate': 'lib/angular-animate/angular-animate.min',
    'ngCookies': 'lib/angular-cookies/angular-cookies.min',
    'ngResource': 'lib/angular-resource/angular-resource.min',
    'ngSanitize': 'lib/angular-sanitize/angular-sanitize.min',
    'ngTouch': 'lib/angular-touch/angular-touch.min',
    // 'timer' : 'lib/angular-timer/dist/angular-timer.min',

    'ui.router': 'lib/angular-ui-router/release/angular-ui-router',

    'pascalprecht.translate': 'lib/angular-translate/angular-translate.min',
    'pascalprecht.translateLoaderStaticFiles': 'lib/angular-translate-loader-static-files/angular-translate-loader-static-files.min',
    'pascalprecht.translateStorageLocal': 'lib/angular-translate-storage-local/angular-translate-storage-local.min',
    'pascalprecht.translateHandlerLog': 'lib/angular-translate-handler-log/angular-translate-handler-log.min',
    'pascalprecht.translateStorageCookie': 'lib/angular-translate-storage-cookie/angular-translate-storage-cookie.min',
    'tmh.dynamicLocale': 'lib/angular-dynamic-locale/dist/tmhDynamicLocale.min',

    'oc.lazyLoad': 'lib/oclazyload/dist/ocLazyLoad.require',
    'text': 'lib/requirejs-text/text',
    'css': 'lib/require-css/css.min',

    // module
    'fastclick': 'AdminLTE-2.3.3/plugins/fastclick/fastclick',
    'sparkline': 'AdminLTE-2.3.3/plugins/sparkline/jquery.sparkline.min',
    'jvectormap': 'AdminLTE-2.3.3/plugins/jvectormap/jquery-jvectormap-1.2.2.min',
    'jvectormapWorld': 'AdminLTE-2.3.3/plugins/jvectormap/jquery-jvectormap-world-mill-en',
    'slimScroll': 'AdminLTE-2.3.3/plugins/slimScroll/jquery.slimscroll.min',
    'chartjs': 'AdminLTE-2.3.3/plugins/chartjs/Chart.min',
    'adminLte': 'AdminLTE-2.3.3/dist/js/app.min',
    'dataTables.jquery': 'AdminLTE-2.3.3/plugins/datatables/jquery.dataTables.min',
    'dataTables.bootstrap': 'AdminLTE-2.3.3/plugins/datatables/dataTables.bootstrap.min',
    'dataTables.responsive': 'AdminLTE-2.3.3/plugins/datatables/extensions/Responsive/js/dataTables.responsive.min',

    //'callAjax' : 'partials/common/js/callAjax',

    'projectWeb': 'partials/layout/routeConfig'
  },

  // dependency config
  shim: {
    'jquery-ui': ['jquery'],
    'jquery-migrate': ['jquery'],
    'twitterBootstrap': ['jquery'],

    'fastclick': ['twitterBootstrap'],
    'sparkline': ['twitterBootstrap'],
    'jvectormap': ['twitterBootstrap'],
    'jvectormapWorld': ['twitterBootstrap'],
    'slimScroll': ['twitterBootstrap'],
    'chartjs': ['twitterBootstrap'],
    'dataTables.jquery': ['twitterBootstrap'],
    'dataTables.bootstrap': ['dataTables.jquery'],
    'dataTables.responsive': ['dataTables.bootstrap'],

    'angular': ['jquery'],
    'ngRoute': ['angular'],
    'ngAnimate': ['angular'],
    'ngCookies': ['angular'],
    'ngResource': ['angular'],
    'ngSanitize': ['angular'],
    'ngTouch': ['angular'],
    'ui.router': ['angular'],

    'pascalprecht.translate': ['angular'],
    'pascalprecht.translateLoaderStaticFiles': ['pascalprecht.translate'],
    'pascalprecht.translateStorageLocal': ['pascalprecht.translateLoaderStaticFiles'],
    'pascalprecht.translateHandlerLog': ['pascalprecht.translateStorageLocal'],
    'pascalprecht.translateStorageCookie': ['pascalprecht.translateHandlerLog'],
    'tmh.dynamicLocale': ['pascalprecht.translateStorageCookie'],

    'oc.lazyLoad': ['angular'],

    'adminLte': [
      'jquery-ui', 'jquery-migrate', 'twitterBootstrap', 'fastclick', 'sparkline', 'slimScroll', 'chartjs',
      'dataTables.responsive', 'ngRoute', 'ngAnimate', 'ngCookies', 'ngResource', 'ngSanitize', 'ngTouch', 'ui.router',
      'tmh.dynamicLocale', 'oc.lazyLoad'],
    'projectWeb': ['adminLte']
  }
});

require(['projectWeb'], function(projectWeb) {
    $(document).ready(function() {
      angular.bootstrap(document, ['projectWeb']).end(function() {
        $.AdminLTE.layout.activate();
      });
    });
  }// $(document).ready end

);// require end
