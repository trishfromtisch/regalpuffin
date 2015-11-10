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
      .when('/get-involved', {
        templateUrl: 'views/getinvolved.html',
        controller: 'GetInvolvedCtrl',
        controllerAs: 'get-involved'
      })
      .when('/shop', {
        templateUrl: 'views/shop.html',
        controller: 'ShopCtrl',
        controllerAs: 'shop'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
