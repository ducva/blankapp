/**
 * Created by michael on 25/01/2016.
 */
controllers.controller('LogInCtrl', function($scope, $state, AuthService, $ionicPopup) {
  $scope.model = {};
  $scope.user = {
    username: '',
    password: ''
  };

  $scope.login = function() {
    AuthService.login($scope.user).then(function(data) {
      $state.go('user.dashboard', {fullname:data.fullname});
    }, function(errMsg) {
      var alertPopup = $ionicPopup.alert({
        title: 'Login failed!',
        template: errMsg
      });
    });
  };
});
