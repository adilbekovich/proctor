(function() {
  'use strict';

  var PhotoBootCtrl = function($scope) {

    console.log("Hello PhotoBootCtrl", $scope);

  };

  console.log('added');
  angular.module('WebrtcCallDemo.controllers').controller('PhotoBootCtrl', PhotoBootCtrl);

})();

