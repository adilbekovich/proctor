(function() {
  'use strict';

  var AcquireCtrl = function($scope) {

    console.log("Hello AcquireCtrl", $scope);

  };

  angular.module('WebrtcCallDemo').controller('AcquireCtrl', AcquireCtrl);

})();
