/**
 * Created by michael on 25/01/2016.
 */
services.service('AuthService', function($q, $http, API_ENDPOINT){

  var LOCAL_TOKEN_KEY = 'yourTokenKey';
  var USER_INFO_KEY = 'userInfoKey';
  var isAuthenticated = false;
  var authToken;

  function loadUserCredentials() {
    var token = window.localStorage.getItem(LOCAL_TOKEN_KEY);
    if (token) {
      useCredentials(token);
    }
  }

  function storeUserCredentials(token) {
    window.localStorage.setItem(LOCAL_TOKEN_KEY, token);
    useCredentials(token);
  }

  function storeUserInfo(data){
    window.localStorage.setItem(USER_INFO_KEY, data);
  }

  function useCredentials(token) {
    isAuthenticated = true;
    authToken = token;

    // Set the token as header for your requests!
    $http.defaults.headers.common.Authorization = authToken;
  }

  function destroyUserCredentials() {
    authToken = undefined;
    isAuthenticated = false;
    $http.defaults.headers.common.Authorization = undefined;
    window.localStorage.removeItem(LOCAL_TOKEN_KEY);
    window.localStorage.removeItem(USER_INFO_KEY);
  }


  var login = function(user) {
    return $q(function(resolve, reject) {
      $http.post(API_ENDPOINT.url + '/login', user).then(function(result) {
        if (result.data.success) {
          storeUserCredentials(result.data.token);
          storeUserInfo(JSON.stringify(result.data));
          resolve(result.data);
        } else {
          reject(result.data.msg);
        }
      },function errorCallback(response) {
        reject(response.data.msg);
      });
    });
  };

  var logout = function() {
    destroyUserCredentials();
  };

  loadUserCredentials();



  // Public API
  return {
    login: login,
    //register: register,
    logout: logout,
    isAuthenticated: function() {return isAuthenticated;}
  };

});
