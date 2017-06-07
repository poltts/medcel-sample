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