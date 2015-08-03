'use strict';

/**
 * @ngdoc overview
 * @name regalpuffinApp
 * @description
 * # regalpuffinApp
 *
 * Main module of the application.
 */
angular
  .module('regalpuffinApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/get-involved', {
        templateUrl: 'views/getinvolved.html',
        controller: 'AboutCtrl',
        controllerAs: 'get-involved'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
