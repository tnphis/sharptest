define(['angular', 'datatables.net', 'datatables.net-bs', 'datatables.net-buttons'], function() {
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

						dtparams.ajax = customAjax
						dtparams.buttons = self.params.dtsettings.buttons || []
						dtparams.dom = self.params.dtsettings.dom || customDom()
						dtparams.language = {
							zeroRecords: '...'
						}

						dtparams.buttons.push({
							text: 'Refresh',
							className: 'btn btn-default btn-sm pull-right',
							action: function ( e, dt, node, config ) {
								dt.ajax.reload();
							}
						})


						$element.find('#maintable').DataTable(dtparams)
						self.tabledrawn = true

						function customAjax(data, callback, settings) {
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

						function customDom() {
							var dom = '<"row sharptest-mb"<"col-sm-6"l><"col-sm-5"f><"col-sm-1"B>>'
							dom += '<"row"<"col-sm-12"tr>>'
							dom += '<"row"<"col-sm-5"i><"col-sm-7"p>>'

							return dom
						}
					}
				})
			}
		}
	}
})
