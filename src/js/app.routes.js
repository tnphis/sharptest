define(['angular', 'underscore', 'app.config'], function (angular, _, appconf) {
	"use strict";

	var initialize = function() {
		//defining the main module here is necessary due to AMD
		var myModule = appconf
		myModule.config( /* @ngInject */ function($stateProvider, $urlRouterProvider, $httpProvider) {
			//state definition
			var loginpage = {
				name: 'login',
				url: '/client/login',
				component: 'loginpage'
			}

			var mainpage = {
				name: 'mainpage',
				url: '/client/main',
				component: 'mainpage'
			}

			var wizard = {
				name: 'wizard',
				url: '/client/wizard',
				component: 'transactionwiz'
			}

			//state config
			$stateProvider.state(loginpage);
			$stateProvider.state(mainpage);
			$stateProvider.state(wizard);

			//interceptors
			$httpProvider.interceptors.push('sessioncheckerInterceptor')
			$urlRouterProvider.otherwise(function($injector, $location) {
				if ($injector.get('$cookies').get('sessionid')) {
					$location.path('/client/main')
				} else {
					$location.path('/client/login')
				}
			})
		})

		angular.bootstrap(window.document, ['mainapp'])
	}

	return {
		initialize: initialize
	}
})
