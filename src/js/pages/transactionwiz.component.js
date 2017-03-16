//Transaction creation is handled here.
//The second page is unneccessary but probably improves the experience.
define(['angular', 'angular-ui-select'], function(angular, uiselect) {
	return {
		name: 'transactionwiz',
		config: {
			templateUrl: 'app/js/pages/transactionwiz.component.html',
			controllerAs: 'tw',
			controller: /* @ngInject */ function($scope, $rootScope, transactionsDataService, utilDataService) {
				//Considered making or using pre-made wizard component for this
				//but it's too simple and specific for this, plus scope needs to be shared.
				//Maybe next time. It did turn out to be a bit large.
				var self = this

				self.action = 'edit' //initial action for a new transaction
				self.confirmTransaction = confirmTransaction
				self.disable_review = true
				self.name_filter = nameFilterQuery
				self.newTransaction = newTransaction
				self.params = {}
				self.name_select_options = []
				self.selected_name = {}
				self.selected_template = {}
				self.setAction = setAction
				self.template_select_options = []
				self.template_filter = templateFilterQuery

				$rootScope.$watch('current_balance', function(newval) {
					//we don't want to update the review balance for completed transactions
					if (newval && !self.transaction_confirmed) {
						self.current_balance = newval
					}
				})

				$scope.$watch('tw.selected_template.selected', function(newval) {
					if (newval) {
						self.selected_name.selected = {name: newval.username}
						self.params.amount = - Number(newval.amount)
					}
				})

				//for enabling the "Review" button
				$scope.$watch('tw.selected_name.selected', validateInput)
				$scope.$watch('tw.params.amount', validateInput)

				function confirmTransaction() {
					self.params.name = self.selected_name.selected.name
					transactionsDataService.create(self.params, function(successResp) {
						self.transaction_confirmed = true
						$rootScope.$broadcast('transaction_confirmed')
					}, function(errorResp) {
						if (errorResp.status == 400) {
							self.error = true
							if (errorResp.data == 'Invalid username') {
								self.error_text = 'The user you selected no longer exists.'
							} else {
								self.error_text = errorResp.data
							}
						}
					})
				}

				function nameFilterQuery(search_string) {
					utilDataService.get_users_list.query({filter: search_string}, function(successResponse) {
						self.name_select_options = successResponse
					})
				}

				function newTransaction() {
					self.params = {}
					self.selected_name = {}
					self.selected_template = {}
					self.current_balance = $rootScope.current_balance
					self.transaction_confirmed = false
					self.template_select_options = []
					templateFilterQuery() //doesn't do that automatically...
					setAction('edit')
				}

				function setAction(action) {
					self.action = action
					if (action == 'edit') {
						self.error = false
					}
				}

				function templateFilterQuery() {
					transactionsDataService.query({}, function(successResponse) {
						self.template_select_options = successResponse.trans_token
					})
				}

				function validateInput() {
					if (self.params.amount && self.params.amount > 0 && self.params.amount <= self.current_balance && self.selected_name.selected) {
						self.disable_review = false
					} else {
						self.disable_review = true
					}
				}
			}
		}
	}
})
