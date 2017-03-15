define(['angular', 'angular-cookies'], function(angular) {
	var service = /* @ngInject */ function($resource) {
		return {
			get_user_info: $resource(Global.apiurl + '/api/protected/user-info', {}, {
				query: {
					method: 'GET',
					params: {},
					isArray: false
				}
			}),
			get_users_list: $resource(Global.apiurl + '/api/protected/users/list', {}, {
				query: {
					method: 'POST',
					params: {},
					isArray: true
				}
			})
		}
	}

	return {
		name: 'utilDataService',
		config: service
	}
})
