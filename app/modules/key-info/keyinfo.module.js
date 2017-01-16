(function(){
	'use strict';
	kmcModule = angular.module('kmcKeyinfoModule',[]);
	kmcModule.config(['$windowProvider', '$stateProvider', '$urlRouterProvider', '$locationProvider','$httpProvider',
		 function($windowProvider, $stateProvider, $urlRouterProvider, $locationProvider,$httpProvider){
		 	$stateProvider
		 	.state('named-gp',{
		 		url:'/named-gp',
		 		templateUrl:'app/modules/key-info/ngpp.html'
		 	})
		 	.state('friends-family-test',{
		 		url:'/friends-family-test',
		 		templateUrl:'app/modules/key-info/fft.html'
		 	})
		 	.state('appointments',{
		 		url:'/appointments',
		 		templateUrl:'app/modules/key-info/appointments.html'
		 	})
		 	.state('gp-2-gp',{
		 		url:'/gp-2-gp',
		 		templateUrl:'app/modules/key-info/gp2gp.html'
		 	})
		 	.state('antenatal-clinic',{
		 		url:'/antenatal-clinic',
		 		templateUrl:'app/modules/key-info/antenatal-clinic.html'
		 	})
			.state('stress-counselling-clinic',{
		 		url:'/stress-counselling-clinic',
		 		templateUrl:'app/modules/key-info/stress-counselling-clinic.html'
		 	})
			.state('practice-survey',{
		 		url:'/practice-survey',
		 		templateUrl:'app/modules/key-info/practice-survey.html'
		 	});
	}]);
})();
