/**
 * Created by michael on 25/01/2016.
 */

app.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider.state('public', {
    url: '',
    templateUrl: 'templates/public.html',
    abstract: true
  });

  $stateProvider.state('public.login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'LogInCtrl'
  });

  $stateProvider.state('public.register', {
    url: '/register',
    templateUrl: 'templates/register.html',
    controller: 'SignUpCtrl'
  });

  $stateProvider.state('user', {
    url: '/user',
    abstract:true,
    templateUrl: 'templates/user/user.html'
  });

  $stateProvider.state('user.dashboard', {
    url:'/dashboard',
    templateUrl: 'templates/user/dashboard.html',
    controller: 'UserCtrl',
    params: {
      'fullname':null
    }
  });

  $stateProvider.state('user.home', {
    url: '/home',
    templateUrl: 'templates/user/home.html',
    controller: 'HomeCtrl'
  });

  $stateProvider.state('user.orders', {
    url: '/orders',
    templateUrl: 'templates/user/orders.html',
    controller: 'OrderCtrl'
  });

  $urlRouterProvider.otherwise('/login');
});
