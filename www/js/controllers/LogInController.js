/**
 * Created by michael on 25/01/2016.
 */
controllers.controller('LogInCtrl', ['$scope', '$state', 'authService', function($scope, $state, authService) {
  $scope.model = {};

  $scope.login = function(){
    var loginData = $scope.model.loginData;

    authService.login(loginData).then(function(response){
      console.debug(response);
      if(response.isSuccess){
        console.debug(response.msg);
        var userData = {
          "username": "admin",
          "userrole": "admin",
          "fullname": 'Vu Anh Duc'
        }
        $state.go('profile', {'userData': userData});
      }
      else{
        console.debug("Logged In failed");
      }
    });


  }

}]);
