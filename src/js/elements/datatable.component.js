define(['angular', 'jquery', 'datatables.net', 'datatables.net-bs'], function(angular, jQuery, datatables, datatablesbs) {
	return {
		name: 'datatable',
		config: {
			templateUrl: 'app/js/elements/datatable.component.html',
			controllerAs: 'dt',
			bindings: {
				params: '<'
			},
			controller: /* @ngInject */ function($scope, $element) {
				var self = this

				self.tabledrawn = false

				$scope.$watch('dt.params', function(newval) {
					if (newval && !self.tabledrawn) {
						var dtparams = self.params.dtsettings || {} //one way binding, no worries
						dtparams.language = {
							zeroRecords: '...'
						}
						dtparams.ajax = function(data, callback, settings) {
							//potentially expandable with urlparams
							var ajaxParams = self.params.ajaxParams || {}
							var data = self.params.dataService.query(ajaxParams, function(successResp) {
								if (self.params.dataSource) {
									callback(successResp[self.params.dataSource])
								} else {
									callback(successResp)
								}
							}, function(errorResp) {
								callback([])
							})
						}

						$element.find('#maintable').DataTable(dtparams)
						self.tabledrawn = true
					}
				})
			}
		}
	}
})
