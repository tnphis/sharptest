define(['angular', 'underscore', 'app.config'], function (angular, _, appconf) {
	"use strict";

	var initialize = function() {
		//defining the main module here is necessary due to AMD
		var myModule = appconf
		myModule.config( /* @ngInject */ function($stateProvider, $urlRouterProvider, $rootScope) {
			var loginpage = {
				name: 'loginpage',
				url: '/client/login',
				component: 'loginpage'
			}

			$stateProvider.state(loginpage);

			$urlRouterProvider.otherwise('/client/login')
		})

		angular.bootstrap(window.document, ['mainapp'])
	}

	return {
		initialize: initialize
	}
})
