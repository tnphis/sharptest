define(['angular', 'angular-cookies'], function(angular, ngcookies) {
	return {
		name: 'appheader',
		config: {
			templateUrl: 'app/js/elements/appheader.component.html',
			controllerAs: 'h',
			controller: /* @ngInject */ function($state, $cookies, $rootScope, utilDataService) {
				var self = this
				self.logout = logout
				self.userdata = {}

				$rootScope.$on('transaction_confirmed', function() {
					refresh()
				})

				refresh()

				function logout() {
					$cookies.remove('sessionid')
					$state.go('login')
				}

				function refresh() {
					utilDataService.get_user_info.query(self.params,
						function(successResp) {
							self.userdata = successResp.user_info_token
							$rootScope.current_balance = successResp.user_info_token.balance
						}
					)
				}
			}
		}
	}
})
