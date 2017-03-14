define(['angular'], function(angular) {
	var service = /* @ngInject */ function($resource) {
		//not guideline-compliant but convenient nevertheless
		return {
			login: $resource(Global.apiurl + '/sessions/create', {}, {
				query: {
					method: 'POST',
					params: {},
					isArray: false
				}
			}),
			register: $resource(Global.apiurl + '/users', {}, {
				query: {
					method: 'POST',
					params: {},
					isArray: false
				}
			})
		}
	}

	return {
		name: 'authDataService',
		config: service
	}
})
