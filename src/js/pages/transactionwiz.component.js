define(['angular', 'angular-ui-select'], function(angular, uiselect) {
	return {
		name: 'transactionwiz',
		config: {
			templateUrl: 'app/js/pages/transactionwiz.component.html',
			controllerAs: 'tw',
			controller: /* @ngInject */ function($scope, $rootScope, transactionsDataService, utilDataService) {
				//Considered making or using pre-made wizard component for this
				//but it's too simple and specific for this, plus scope needs to be shared.
				//Maybe next time.
				var self = this

				self.action = 'edit' //initial action for a new transaction
				self.name_filter = nameFilterQuery
				self.params = {}
				self.name_select_options = []
				self.selected_name = {}
				self.transaction_select_options = []
				self.transaction_filter = transactionFilterQuery

				$rootScope.$watch('current_balance', function(newval, oldval) {
					//We only need to set this at page refresh.
					//Afterwards, the scope balance will be set manually.
					if (newval && !oldval) {
						self.current_balance = newval
					}
				})

				function nameFilterQuery(search_string) {
					utilDataService.get_users_list.query({filter: search_string}, function(successResponse) {
						self.name_select_options = successResponse
					})
				}

				function transactionFilterQuery() {
					transactionDataService.get_users_list.query({}, function(successResponse) {
						self.transaction_select_options = successResponse
					})
				}
			}
		}
	}
})
