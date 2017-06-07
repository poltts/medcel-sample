const web = angular.module('webApp', ['ngRoute']);

/* CONFIG  */
web.config(['$routeProvider','$httpProvider','$locationProvider',
 function($routeProvider, $httpProvider, $locationProvider) {

	$routeProvider

	.when('/', {
		controller : 'homeController',
		templateUrl : 'views/home.html'
	})

		.otherwise('/');
        
}]);

 
/* SLIDE DIRECTIVE   */
// web.directive('box', function() { 
//   return { 
//     restrict: 'E', 
//     scope: { 
//       info: '='
//     }, 
//     templateUrl: '../../../views/templates/box.html'
//   }; 
// });
 
/* SLIDE DIRECTIVE   */
web.directive('navMenu', function() { 
  return { 
    restrict: 'AE',
    replace: true, 
    scope: { 
      data: '='
    }, 
    templateUrl: '../../../views/templates/nav-menu.html'
  }; 
});
 
/* DIRECTIVE   */
web.directive('notify', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '='
    }, 
    templateUrl: '../../../views/templates/notify.html'
  }; 
});
 
/* DIRECTIVE   */
web.directive('search', function() { 
  return { 
    restrict: 'AE',
    replace: true,
    scope: { 
      info: '='
    }, 
    templateUrl: '../../../views/templates/search.html'
  }; 
});
 
/* SLIDE DIRECTIVE   */
// web.directive('slide', function($timeout) { 
//   return { 
//     restrict: 'AE',
//     replace: true,
//     scope: {
//       images: '='
//     },
//     link: function(scope, elem, attrs) {
//       var timer;
//       var sliderFunc = function() {
//           timer = $timeout(function() {
//             scope.next();
//             timer = $timeout(sliderFunc, 5000);
//           } , 5000);
//       };
//       scope.currentIndex = 0;
//       scope.$watch('currentIndex', function() {
//       scope.images.forEach(function(image) {
//         image.visible = false; 
//       });


//       scope.images[scope.currentIndex].visible = true;
//       sliderFunc();

//       scope.$on('$destroy', function() {
//         $timeout.cancel(timer);
//       });

//     });
//     },
//     templateUrl: '../../../views/templates/slide.html'
//   }; 
// });
 
/* DIRECTIVE   */
web.directive('userProfile', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '='
    }, 
    templateUrl: '../../../views/templates/user-profile.html'
  }; 
});
/* HOME CONTROLLER  */
 web.controller('homeController',['$scope', '$location', '$route', '$routeParams', 
 function ($scope, $location, $route, $routeParams) {
     $scope.activePage = $location.path();
     
     $scope.isActiveTab = function(tab){ 
		if($scope.activeTab == tab){
			return true;
		}else{
			return false;
		}
     };

	 $scope.navMenu = [
		 {
			 name: 'home',
			 route: '/'
		 },
		 {
			 name: 'videos',
			 route: '/videos'
		 }
	 ];

	 $scope.notifyData = {
		 notifyCount: 5
	 };
	 $scope.userData = {
		 userName: 'Marina Mota',
		 userPic: 'http://localhost:8080/dist/img/user-pic.png'
	 }; 

}]);  