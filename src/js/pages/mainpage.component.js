define(['angular'], function(angular) {
	return {
		name: 'mainpage',
		config: {
			templateUrl: 'app/js/pages/mainpage.component.html',
			controllerAs: 'main',
			controller: /* @ngInject */ function(transactionsDataService) {
				var self = this

				self.tabs = [{
					id: 0,
					label: 'Transaction history'
				}, {
					id: 1,
					label: 'New transaction'
				}]
				self.dtparams = {
					dataService: transactionsDataService,
					dataSource: 'trans_token',
					dtsettings: {
						columns: [{
							visible: false
						},{
							title: 'Date',
							width: '25%'
						}, {
							title: 'Name',
							width: '25%'
						}, {
							title: 'Amount',
							width: '25%'
						}, {
							title: 'Balance',
							width: '25%'
						}]
					}
				}
			}
		}
	}
})
