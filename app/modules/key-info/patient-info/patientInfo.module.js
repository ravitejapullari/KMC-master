;(function(){
	'use strict';

	kmcModule = angular.module('kmcPatientinfoModule',[]);
	kmcModule.config(['$windowProvider', '$stateProvider', '$urlRouterProvider', '$locationProvider','$httpProvider',
		 function($windowProvider, $stateProvider, $urlRouterProvider, $locationProvider,$httpProvider){
		 	$stateProvider
		 	.state('acne',{
		 		url:'/patient-information/acne',
		 		templateUrl:'app/modules/key-info/patient-info/acne.html'
		 	})
		 	.state('antibiotics',{
		 		url:'/patient-information/antibiotics',
		 		templateUrl:'app/modules/key-info/patient-info/antibiotics.html'
		 	})
		 	.state('arthritis',{
		 		url:'/patient-information/arthritis',
		 		templateUrl:'app/modules/key-info/patient-info/arthritis.html'
		 	})
		 	.state('backache',{
		 		url:'/patient-information/backache',
		 		templateUrl:'app/modules/key-info/patient-info/backache.html'
		 	})
		 	.state('benign-prostatic-hypertrophy',{
		 		url:'/patient-information/benign-prostatic-hypertrophy',
		 		templateUrl:'app/modules/key-info/patient-info/benign-prostatic-hypertrophy.html'
		 	})
		 	.state('cervical-smear',{
		 		url:'/patient-information/baccervical-smearkache',
		 		templateUrl:'app/modules/key-info/patient-info/cervical-smear.html'
		 	})
		 	.state('cold--flu',{
		 		url:'/patient-information/baccold--flukache',
		 		templateUrl:'app/modules/key-info/patient-info/cold--flu.html'
		 	})
		 	.state('copd',{
		 		url:'/patient-information/copd',
		 		templateUrl:'app/modules/key-info/patient-info/copd.html'
		 	})
			 .state('depression',{
		 		url:'/patient-information/depression',
		 		templateUrl:'app/modules/key-info/patient-info/depression.html'
		 	})
			 .state('eczema',{
		 		url:'/patient-information/eczema',
		 		templateUrl:'app/modules/key-info/patient-info/eczema.html'
		 	});
	}]);
})();
