const web = angular.module('webApp', ['ngRoute','ngAnimate']);

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
 
/* DIRECTIVE   */
web.directive('videos', function() { 
  return { 
    restrict: 'AE', 
    scope: { 
      open: '=',
      info: '='
    }, 
    link: function(scope,el,attr){
        scope.moreVideos = function(){
            scope.videosMore = !scope.videosMore; 
        }
        console.log(scope.videosMore);
        scope.$watch('videosMore', function(){
            if(scope.videosMore == true){
                scope.videosLimit = null;
                scope.btnTxt = "Ver menos";
                scope.btnIcon = 'up';
            }else{
                scope.videosLimit = 5;
                scope.btnTxt = "Ver mais";
                scope.btnIcon = 'down';
            }
        });
    },
    templateUrl: '../../../views/templates/videos.html'
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
	 $scope.videoData = [
		{
			id: 1,
			type: 'video',
			time: '7:21',
			category: 'Assistêncioa pré-natal',
			title: 'Alterações no sistema nervoso  do recém-na...',
			img: 'dist/img/01.png',
			rate: 3
		},
		{
			id: 2,
			type: 'video',
			time: '37:20',
			category: 'Climatério',
			title: 'Hiportemia terapêutica na asfixia neonatal',
			img: 'dist/img/02.png',
			rate: 2
		},
		{
			id: 3,
			type: 'simulado',
			questions: 30,
			category: 'Trombofilias',
			title: 'Simulado sobre trombofilias',
			img: 'dist/img/03.png',
			rate: 3
		},
		{
			id: 4,
			type: 'video',
			time: '3:15',
			category: 'Trombofilias',
			title: 'Adenomegalias febris na adolescência',
			img: 'dist/img/04.png'
		},
		{
			id: 5,
			type: 'simulado',
			questions: 40,
			category: 'Assistêncioa pré-natal',
			title: 'Simulado sobrecontagem dinâmica',
			img: 'dist/img/05.png'
		},
		{
			id: 2,
			type: 'video',
			time: '37:20',
			category: 'Climatério',
			title: 'Hiportemia terapêutica na asfixia neonatal',
			img: 'dist/img/02.png',
			rate: 2
		},
		{
			id: 3,
			type: 'simulado',
			questions: 30,
			category: 'Trombofilias',
			title: 'Simulado sobre trombofilias',
			img: 'dist/img/03.png',
			rate: 3
		},
		{
			id: 4,
			type: 'video',
			time: '3:15',
			category: 'Trombofilias',
			title: 'Adenomegalias febris na adolescência',
			img: 'dist/img/04.png'
		},
		{
			id: 5,
			type: 'simulado',
			questions: 40,
			category: 'Assistêncioa pré-natal',
			title: 'Simulado sobrecontagem dinâmica',
			img: 'dist/img/05.png'
		}
	 ];
	 $scope.videoMeta = '20,1%';

	 $scope.videos = {
		 data: $scope.videoData,
		 meta: $scope.videoMeta
	 }

}]);  