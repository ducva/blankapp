/**
 * Created by michael on 23/01/2016.
 */
controllers
  .controller('HomeCtrl', function ($scope){
      $scope.model = {};
      $scope.model.name = "World";

      $scope.model.hotCategories = {
        1: {
          title:'Man\'s clothing',
          background: 'http://p.ebaystatic.com/aw/mobile/mobileWeb/popular_categories/spr/us-w188x178-q50-v1.jpg',
          position : 0
        },
        2: {
          title:'Woman\'s clothing',
          background: 'http://p.ebaystatic.com/aw/mobile/mobileWeb/popular_categories/spr/us-w188x178-q50-v1.jpg',
          position : 1
        },
        3 :{
          title: "Kid's clothing",
          background: 'http://p.ebaystatic.com/aw/mobile/mobileWeb/popular_categories/spr/us-w188x178-q50-v1.jpg',
          position: 2
        }
      };

      $scope.model.banners = [
        {
          title:'money save',
          image: 'http://rtm.ebaystatic.com/1000/RTMS/Image/7947_EN_ROW_mWeb_DEALS_564x362.jpg'
        },
        {
          title:'2',
          image:'http://rtm.ebaystatic.com/1000/RTMS/Image/7947_EN_ROW_mWeb_TECH_564x362.jpg'
        }
      ]

      $scope.doRefresh = function() {
        // load latest data
        //$scope.doRefresh = function() {
        //  $http.get('/new-items')
        //    .success(function(newItems) {
        //      $scope.items = newItems;
        //    })
        //    .finally(function() {
        //      // Stop the ion-refresher from spinning
        //      $scope.$broadcast('scroll.refreshComplete');
        //    });
        //};
      };
    }
  );
