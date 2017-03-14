define(['angular'], function(angular) {
	return {
		name: 'registrationform',
		config: {
			templateUrl: 'app/js/login/registrationform.component.html',
			controllerAs: 'rf',
			controller: /* @ngInject */ function(authDataService) {
				var self = this

				self.register_user = registerUser
				self.registrationInProgress = false

				function registerUser() {
					self.registrationInProgress = true

					if (self.params.password == self.password_confirm) {
						authDataService.register.query(self.params,
							function(successResp) {
								self.error = false
								self.success = true
								self.registrationInProgress = false
							},
							function(errorResp) {
								//empty data is handled via form.required, no need to handle that
								if (errorResp.status == 400) {
									self.errorText = 'A user with this email already exists. Please use the login form to sign in'
									self.error = true
									self.registrationInProgress = false
								}
							}
						)
					} else {
						self.errorText = 'The passwords do not match'
						self.error = true
						self.registrationInProgress = false
					}
				}
			}
		}
	}
})
