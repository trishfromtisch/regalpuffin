'use strict';

describe('Controller: GetinvolvedCtrl', function () {

  // load the controller's module
  beforeEach(module('regalpuffinApp'));

  var GetinvolvedCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    GetinvolvedCtrl = $controller('GetinvolvedCtrl', {
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(GetinvolvedCtrl.awesomeThings.length).toBe(3);
  });
});
