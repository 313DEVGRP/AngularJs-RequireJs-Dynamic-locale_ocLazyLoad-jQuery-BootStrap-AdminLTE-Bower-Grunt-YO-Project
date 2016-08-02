'use strict';

require
        .config({
          baseUrl: '',
          waitSeconds: 30,
          onNodeCreated: function(node, config, moduleName, url) {
            console.log('module ' + moduleName + ' is about to be loaded');

            node.addEventListener('load', function() {
              console.log('module ' + moduleName + ' has been loaded');
            });

            node.addEventListener('error', function() {
              console.log('module ' + moduleName + ' could not be loaded');
            });
          },

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
            'adminLte': 'AdminLTE-2.3.3/dist/js/app',
            'demo': 'AdminLTE-2.3.3/dist/js/demo',
            'dataTables': 'AdminLTE-2.3.3/plugins/datatables/jquery.dataTables.min',
            'dataTables.bootstrap': 'AdminLTE-2.3.3/plugins/datatables/dataTables.bootstrap.min',
            'dataTables.responsive': 'AdminLTE-2.3.3/plugins/datatables/extensions/Responsive/js/dataTables.responsive.min',

            'projectWeb': 'partials/layout/routeConfig'
          },

          shim: {
            'jquery-migrate': ['jquery'],
            'jquery-ui': ['jquery-migrate'],
            'twitterBootstrap': ['jquery-ui'],

            'angular': ['twitterBootstrap'],
            'ngRoute': ['angular'],
            'ngAnimate': ['ngRoute'],
            'ngCookies': ['ngAnimate'],
            'ngResource': ['ngCookies'],
            'ngSanitize': ['ngResource'],
            'ngTouch': ['ngSanitize'],

            'ui.router': ['ngTouch'],
            'pascalprecht.translate': ['ui.router'],
            'pascalprecht.translateLoaderStaticFiles': ['pascalprecht.translate'],
            'pascalprecht.translateStorageLocal': ['pascalprecht.translateLoaderStaticFiles'],
            'pascalprecht.translateHandlerLog': ['pascalprecht.translateStorageLocal'],
            'pascalprecht.translateStorageCookie': ['pascalprecht.translateHandlerLog'],
            'tmh.dynamicLocale': ['pascalprecht.translateStorageCookie'],

            'oc.lazyLoad': ['tmh.dynamicLocale'],
            'text': ['oc.lazyLoad'],
            'css': ['text'],

            'fastclick': ['css'],
            'sparkline': ['fastclick'],
            'jvectormap': ['sparkline'],
            'jvectormapWorld': ['jvectormap'],
            'slimScroll': ['jvectormapWorld'],
            'chartjs': ['slimScroll'],

            'adminLte': ['chartjs'],
            'demo': ['adminLte'],
            'dataTables': ['demo'],
            'dataTables.bootstrap': ['dataTables'],
            'dataTables.responsive': ['dataTables.bootstrap'],
            'projectWeb': ['dataTables.responsive']
          }
        });

require(['projectWeb'], function(projectWeb, css) {
  $(document).ready(function() {
    angular.bootstrap(document, ['projectWeb']);
  });

  function loadCss(url) {
    var link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = url;
    document.getElementsByTagName("head")[0].appendChild(link);
  }
  ;
}// $(document).ready
);// require
