define(['angular'], function(angular) {
	return {
		name: 'sessionchecker',
		config: {
			templateUrl: 'app/js/elements/sessionchecker.component.html',
			controller: /* @ngInject */ function($cookies, $rootScope, $cookies) {
				var self = this
				self.showWarning = false

				$rootScope.$watch('session_expired', function(newval) {
					if (newval) {
						self.showWarning = true
						$cookies.remove('sessionid')
					}
				})
			}
		}
	}
})
