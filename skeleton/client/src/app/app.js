(function() {
  'use strict';

  angular.element(document).ready(function() {
    angular.bootstrap(document, ['app']);
  });

  function config(BackandProvider, $stateProvider, $urlRouterProvider, $logProvider, $httpProvider) {
    $urlRouterProvider.otherwise('/');
    $logProvider.debugEnabled(true);

    BackandProvider.setAppName('coursemanagerwebinar');
    //BackandProvider.setSignUpToken('0b9bf00e-31f8-4d49-932b-ae0f687bd2d7');
    BackandProvider.setAnonymousToken('600f494f-6f56-4f42-b8f7-fe9c3ac15982');

    //BackandProvider.setAppName('-Your App Name --');
    //BackandProvider.setAnonymousToken('Your Anonymous Token');
    //BackandProvider.setSignUpToken('Your SignUp Token');

    $httpProvider.interceptors.push('httpInterceptor');

    $stateProvider
      .state('root', {
        abstract: true,
        views: {
          'header': {
            templateUrl: 'src/common/header.tpl.html',
            controller: 'HeaderCtrl'
          },
          'footer': {
            templateUrl: 'src/common/footer.tpl.html',
            controller: 'FooterCtrl'
          }
        }
      });
  }

  function MainCtrl($log) {
    $log.debug('MainCtrl loaded!');
  }

  function run($log) {
    $log.debug('App is running!');
  }

  angular.module('app', [
      'ui.router',
      'backand',
      'home',
      'getting-started',
      'common.header',
      'common.footer',
      'common.services.backand',
      'common.services.data',
      'common.directives.version',
      'common.filters.uppercase',
      'common.interceptors.http'
    ])
    .config(config)
    .run(run)
    .controller('MainCtrl', MainCtrl)
    .value('version', '1.1.0');
})();
