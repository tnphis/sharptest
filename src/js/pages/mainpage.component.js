define(['angular', 'underscore'], function(angular, _) {
	return {
		name: 'mainpage',
		config: {
			templateUrl: 'app/js/pages/mainpage.component.html',
			controllerAs: 'main',
			controller: /* @ngInject */ function($rootScope, transactionsDataService) {
				var self = this

				self.tabs = [{
					id: 0,
					label: 'Transaction history'
				}, {
					id: 1,
					label: 'Transaction editor'
				}]
				self.dtparams = {
					id: 'maintable',
					dataService: transactionsDataService,
					dataSource: 'trans_token',
					dataTransform: prepareData,
					dtsettings: {
						columns: [{
							title: 'Date',
							width: '40%',
							data: 'date',
							type: 'date'
						}, {
							title: 'Recipient',
							width: '40%',
							data: 'username'
						}, {
							title: 'Amount',
							width: '20%',
							data: 'amount'
						}, {
							title: 'Balance',
							width: '20%',
							data: 'balance'
						}],
						"order": [[ 0, "desc" ]]
					}
				}

				//since components use isolated scopes only, we need to communicate to the component though the rootscope
				$rootScope.$on('transaction_confirmed', function() {
					self.dtparams.refresh()
				})

				function prepareData(data) {
					var transdata = _.map(data, function(obj) {
						obj.amount = -obj.amount
						return obj
					})
					return transdata
				}
			}
		}
	}
})
