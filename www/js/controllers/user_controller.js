/**
 * Created by michael on 28/01/2016.
 */
controllers.controller('UserCtrl', function($scope, AuthService, STORE_KEY, $state, $stateParams){
  $scope.data = {
    fullname: $stateParams.fullname
  }

  $scope.destroySession = function() {
    AuthService.logout();
  };

  $scope.viewOrders = function() {
    $state.go('user.orders');
  };

  $scope.logout = function() {
    AuthService.logout();
    $state.go('public.login');
  };


  function loadParams(){
    if($stateParams.fullname){
      $scope.fullname = $stateParams.fullname;
    }
    else{
      var userInfo = window.localStorage.getItem(STORE_KEY.USER_INFO_KEY);
      if(!userInfo){
        AuthService.logout();
        $state.go('public.login');
      }
      else{
        $scope.fullname = JSON.parse(userInfo).fullname;
      }
    }
  }

  $scope.goHome = function(){
    $state.go('user.home');
  }

  loadParams();
})
