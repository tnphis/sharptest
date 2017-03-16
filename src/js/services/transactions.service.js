define(['angular'], function(angular) {
	var service = /* @ngInject */ function($resource) {
		return $resource(Global.apiurl + '/api/protected/transactions', {}, {
			query: {
				method: 'GET',
				params: {},
				isArray: false
			},
			create: {
				method: 'POST',
				params: {},
				isArray: false
			}
		})
	}

	return {
		name: 'transactionsDataService',
		config: service
	}
})
