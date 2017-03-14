define(['angular', 'angular-cookies'], function(angular, ngcookies) {
	return {
		name: 'appheader',
		config: {
			templateUrl: 'app/js/elements/appheader.component.html',
			controllerAs: 'h',
			controller: /* @ngInject */ function($state, $cookies, utilDataService) {
				var self = this
				self.logout = logout
				self.userdata = {}

				utilDataService.get_user_info.query(self.params,
					function(successResp) {
						self.userdata = successResp.user_info_token
					}
				)

				function logout() {
					$cookies.remove('sessionid')
					$state.go('login')
				}
			}
		}
	}
})
