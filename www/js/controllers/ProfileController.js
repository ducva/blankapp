/**
 * Created by michael on 25/01/2016.
 */
controllers.controller('ProfileCtrl', ['$scope', '$state', '$stateParams', function($scope, $state, $stateParams){
  $scope.model = {};
  console.debug($stateParams);
  if($stateParams.userData) {
    $scope.model.name = $stateParams.userData.fullname;
  }
}]);
