(function() {
  'use strict';

  var LoginCtrl = function($scope) {

    console.log("Hello LoginCtrl", $scope);
    $scope.validateEmail = function($event) {



    };

  };

  angular.module('WebrtcCallDemo.controllers').controller('LoginCtrl', LoginCtrl);

})();
