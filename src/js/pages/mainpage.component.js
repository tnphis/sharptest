define(['angular'], function(angular) {
	return {
		name: 'mainpage',
		config: {
			templateUrl: 'app/js/pages/mainpage.component.html',
			controllerAs: 'main',
			controller: /* @ngInject */ function(transactionsDataService) {
				var self = this

				self.dtparams = {
					dataService: transactionsDataService,
					dataSource: 'trans_token',
					dtsettings: {
						columns: [{
							visible: false
						},{
							title: 'Date'
						}, {
							title: 'Name'
						}, {
							title: 'Amount'
						}, {
							title: 'Balance'
						}]
					}
				}
			}
		}
	}
})
