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
