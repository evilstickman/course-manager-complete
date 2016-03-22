(function() {
  'use strict';

  angular
    .module('app')
    .config(config)
    .controller('CoursesCtrl',['CoursesService', 'coursesList', CoursesCtrl]);

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
     $stateProvider
      .state('root.courses', {
        url: '/courses',
        views: {
          '@': {
            templateUrl: 'src/app/courses/courses.tpl.html',
            controller: 'CoursesCtrl',
            controllerAs: 'vm',
            resolve: {
              coursesList: function (CoursesService) {
                return CoursesService.list();
              }
            }
          }
        }
      })
  }

  /**
   * @name  CoursesCtrl
   * @description Controller
   */
  function CoursesCtrl(CoursesService, coursesList) {
    var vm = this;
    vm.courses = null;

    //get the courses from the resolve
    vm.courses = coursesList.data.data;
  }


})();
