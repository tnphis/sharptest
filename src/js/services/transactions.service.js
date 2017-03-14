define(['angular', 'angular-cookies'], function(angular) {
	var service = /* @ngInject */ function($resource) {
		return $resource(Global.apiurl + '/api/protected/transactions', {}, {
			query: {
				method: 'GET',
				params: {},
				isArray: true
			}
		})
	}

	return {
		name: 'transactionsDataService',
		config: service
	}
})
