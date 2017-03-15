define(['angular', 'angular-cookies'], function(angular, ngcookies) {
	var service = /* @ngInject */ function($q, $rootScope, $cookies) {
		return {
			request: requestIntercept,
			responseError: responseErrorIntercept
		}

		function requestIntercept(config) {
			var sessionid = $cookies.get('sessionid')
			if (sessionid) {
				if (!config.headers) {
					config.headers = {}
				}
				config.headers.Authorization = 'Bearer ' + sessionid
			}

			return config
		}

		//this may throw an angular error in the console but the response is actually handled here.
		function responseErrorIntercept(errorResp) {
			if (errorResp.status == 401) {
				$rootScope.session_expired = true
				//it is possible to check for the cookie existence (as opposed to validity)
				//here and redirect the user to the login page, if desired
			}
			return $q.reject(errorResp)
		}
	}

	return {
		name: 'sessioncheckerInterceptor',
		config: service
	}
})
