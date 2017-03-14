define(['angular', 'angular-cookies'], function(angular) {
	var service = /* @ngInject */ function($resource) {
		return {
			get_user_info: $resource(Global.apiurl + '/api/protected/user-info', {}, {
				query: {
					method: 'GET',
					params: {},
					isArray: false
				}
			})
		}
	}

	return {
		name: 'utilDataService',
		config: service
	}
})
