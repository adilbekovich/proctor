(function() {
  'use strict';

  var LoginCtrl = function($scope) {

    console.log("Hello LoginCtrl", $scope);

  };

  angular.module('WebrtcCallDemo.controllers').controller('LoginCtrl', LoginCtrl);

})();
