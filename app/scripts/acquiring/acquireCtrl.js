(function() {
  'use strict';

  var AcquireCtrl = function($scope) {

    console.log("Hello AcquireCtrl", $scope);

  };

  angular.module('WebrtcCallDemo.controllers').controller('AcquireCtrl', AcquireCtrl);
  console.log('executed');

})();
