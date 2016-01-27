/**
 * Created by michael on 28/01/2016.
 */

services.service('OrderService', function($http, API_ENDPOINT, $q){

  function loadOrders(){
    return $q(function(resolve, reject) {
      $http.get(API_ENDPOINT.url + '/orders').then(function(result) {
        if (result.data.success) {
          resolve(result.data.orders);
        } else {
          reject(result.data.msg);
        }
      },function errorCallback(response) {
        reject(response.data.msg);
      });
    });
  }

  return {
    loadOrders: loadOrders
  }
})
