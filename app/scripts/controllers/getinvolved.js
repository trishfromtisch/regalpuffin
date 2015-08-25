'use strict';

/**
 * @ngdoc function
 * @name regalpuffinApp.controller:GetinvolvedCtrl
 * @description
 * # GetinvolvedCtrl
 * Controller of the regalpuffinApp
 */
angular.module('regalpuffinApp')
  .controller('GetInvolvedCtrl', ['$scope', '$http', function ($scope, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    this.sendMail = function () {
 
            var data = ({
                contactName : this.contactName,
                contactEmail : this.contactEmail,
                contactMsg : this.contactMsg
            });
 
            // Simple POST request example (passing data) :
            $http.post('/contact-form', data).
                success(function(data, status, headers, config) {
                    // this callback will be called asynchronously
                    // when the response is available
 
 
                }).
                error(function(data, status, headers, config) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                });
 
        };
  }
  ]);

