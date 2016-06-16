require.config({
  baseUrl: '',
  paths: {
    'jquery': 'lib/jquery/dist/jquery',
    'angular': 'lib/angular/angular.min',
    'test': 'js/testmodule',
    'ngGrid': 'js/ng-grid-2.0.11.debug',
    'ocLazyLoad': 'lib/oclazyload/dist/ocLazyLoad.require'
  },
  shim: {
    'angular': ['jquery'],
    'ocLazyLoad': ['angular'],
    'ngGrid': ['angular'],
    'js/lazymodule': ['test', 'ngGrid'],
    'test': ['ocLazyLoad']
  }
});

// Start the main app logic.
require(['test'], function() {
  angular.bootstrap(document.body, ['test']);
});
