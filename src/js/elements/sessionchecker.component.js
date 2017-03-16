//An alert div to be shown whenever user session expires.
//might look quesitonable but I think it's better for the user than
//an immediate redirect to /login. A modal dialog with loginform could have worked as well.
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
