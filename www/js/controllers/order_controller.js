/**
 * Created by michael on 28/01/2016.
 */

controllers.controller('OrderCtrl', function($scope, OrderService){
  $scope.orders = {

  }

  function loadOrders(){
    OrderService.loadOrders().then(function(result){
      $scope.orders = result;
    })
  }

  loadOrders();
})
