/**
 * Created by michael on 25/01/2016.
 */

app.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider.state('home', {
      url: '/home',
      templateUrl: 'templates/home.html',
      controller: 'HomeCtrl'
    });

  $stateProvider.state('signin', {
      url: '/signin',
      templateUrl: 'templates/signin.html'
    });
  $stateProvider.state('signin.register', {
      url: '/register',
      views: {
        'register-tab': {
          templateUrl: 'templates/register.html',
          controller: 'SignUpCtrl'
        }
      }
    });

  $stateProvider.state('signin.login', {
    url: '/login',
    views: {
      'login-tab': {
        templateUrl: 'templates/login.html',
        controller: 'LogInCtrl'
      }
    }
  });

  $stateProvider.state('profile', {
    url: '/profile',
    templateUrl: 'templates/profile.html',
    controller: 'ProfileCtrl',
    params: {
      'userData': null
    }
  })

  $urlRouterProvider.otherwise('/home');
});
