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

    $scope.master = {};
    $scope.clear = {};

    $scope.buttonStatus = "Submit";

    $scope.sent = false

    $scope.update = function(user) {
      $scope.master = angular.copy(user);

      $http.post('/get-involved', {
          name: user.name,
          email: user.email,
          phone: user.phone,
          message: user.comment
      }).success(function(data, status, headers, config) {
              // if(data.success){
                  // $location.path('/');
                  $scope.form.$submitted;
                  $scope.buttonStatus = "Sent";
                  $scope.sent = true;
                  $scope.reset();
        }).error(function(data, status, headers, config) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        console.log(data.msg);
      });


    };
      
  

    $scope.reset = function(form) {
      if (form) {
        form.$setPristine();
        form.$setUntouched();
      }
      $scope.user = angular.copy($scope.clear);
    };


      // this.sendMail = function () {
 
      //       var data = ({
      //           contactName : $scope.user.name,
      //           contactEmail : $scope.user.email,
      //           contactPhone : $scope.user.phone,
      //           contactMsg : $scope.user.comments
      //       });
 
      //       // Simple POST request example (passing data) :
      //       $http.post('/get-involved', data).
      //           success(function(data, status, headers, config) {
      //               // this callback will be called asynchronously
      //               // when the response is available
      //             console.log(data.msg);
                
      //           }).
      //           error(function(data, status, headers, config) {
      //               // called asynchronously if an error occurs
      //               // or server returns response with an error status.
      //             console.log(data.msg);
      //           });
 
      //   };


    // Trigger validation flag.
    
  }
  ]);

