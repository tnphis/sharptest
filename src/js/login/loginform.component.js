define(['angular', 'angular-cookies'], function(angular, ngcookies) {
	return {
		name: 'loginform',
		config: {
			templateUrl: 'app/js/login/loginform.component.html',
			controllerAs: 'lf',
			controller: /* @ngInject */ function($state, $cookies, $rootScope, authDataService) {
				var self = this
				self.login_user = loginUser
				self.signinInProgress = false

				function loginUser() {
					self.signinInProgress = true

					authDataService.login.query(self.params,
						function(successResp) {
							self.error = false
							self.signinInProgress = false
							$cookies.put('sessionid', successResp.id_token)
							$rootScope.session_expired = false
							$state.go('mainpage')
						},
						function(errorResp) {
							//custom error handling here since there is no session yet.
							//empty data is handled via form.required, no need to handle that
							if (errorResp.status == 401) {
								self.errorText = 'Invalid email or password, please register using the registration form.'
								self.error = true
								self.signinInProgress = false
							}
						}
					)
				}
			}
		}
	}
})
