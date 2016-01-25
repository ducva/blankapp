/**
 * Created by michael on 25/01/2016.
 */
services.factory('authService', [ '$q', 'jgSimpleApi', function($q, jgSimpleApi){
  function login(loginData) {
    var waitForData = $q.defer();

    var q, url;
    url = 'http://demo8648895.mockable.io/login';

    q = jgSimpleApi.post(url, loginData).$promise;

    q.then(function (response) {
      console.debug(response);
      if ((response) && (response.success)) {
        waitForData.resolve(response.data);
      } else {
        // No data, just return
        waitForData.resolve([]);
      }

      }).catch(function () {
        // No data, just return
        waitForData.resolve([]);
      });

      return waitForData.promise;
    }

  // Public API
  return {
    login: login
  };

}]);
