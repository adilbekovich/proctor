(function() {
  'use strict';

  var PhotoBootCtrl = function($scope) {

    console.log("Hello PhotoBootCtrl", $scope);

  };

  angular.module('WebrtcCallDemo.controllers').controller('PhotoBootCtrl', PhotoBootCtrl);

})();

