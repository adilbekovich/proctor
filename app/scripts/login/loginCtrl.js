(function() {
  'use strict';

  var LoginCtrl = function($scope, $ionicPopup, $http,  $ionicLoading, $state) {

    var validUsername, validPassword;

    $scope.login = {
      username: '',
      password: ''
    };

    $scope.loginInvalid = true;

    $scope.authenticate = function(){

      var myPopup = $ionicPopup.show({
        title: 'Are you ready to login?',
        subTitle: 'You are logging in with the username "' + $scope.login.username + ' " into our system...',
        scope: $scope,
        buttons: [
          { text: 'Cancel' },
          { text: 'OK'}]
      });
      myPopup.then(function() {

        $ionicLoading.show({
          template: 'Loading...'
        });

        $http.get('http://ip.jsontest.com/').
          success(function(data, status, headers, config) {
            // this callback will be called asynchronously
            // when the response is available
            console.log('success');

            $state.go('tab.photoboot');
            $ionicLoading.hide();

          }).
          error(function(data, status, headers, config) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            console.log('wtf');

          });

      });

    };

    $scope.validateEmail = function() {

      var regExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      validUsername = regExp.test($scope.login.username);

      $scope.loginInvalid = !isFormValid();

    };

    $scope.validatePassword = function() {

      validPassword = $scope.login.password && $scope.login.password.length > 3;
      $scope.loginInvalid = !isFormValid();

    };

    var isFormValid = function(){

      return validPassword && validUsername;

    }

  };

 angular.module('WebrtcCallDemo').controller('LoginCtrl', LoginCtrl);

})();
