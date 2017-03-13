define(['angular'], function(angular) {
	console.log('setting up component')
	return {
		name: 'services',
		config: {
			templateUrl: 'app/js/pages/services.component.html',
			bindings: {
				services: '<',
				ids: '<'
			},
			controller: /* @ngInject */ function($scope, $state, $location) {
				var self = this

				self.get_current_class = get_current_class
				self.idslist = []
				self.noIdsSelected = true
				self.refreshIds = refreshIds
				self.selectedIds = {}
				self.toDetails = toDetails

				//выставим id, если они есть в url параметрах
				$scope.$watch('$ctrl.ids', setIdsFromUrl)


				function get_current_class(index) {
					if (index % 2) {
						return 'even'
					} else {
						return 'odd'
					}
				}

				function refreshIds() {
					self.idslist = []
					self.noIdsSelected = true

					for (var id in self.selectedIds) {
						if (self.selectedIds[id]) {
							self.idslist.push(id)
							self.noIdsSelected = false
						}
					}

					$location.search('ids', self.idslist)
				}

				function setIdsFromUrl(newval) {
					if (newval) {
						if (typeof(newval) == 'string' || typeof(newval) == 'number') {
							self.selectedIds[Number(newval)] = true
						} else if (typeof(newval) == 'object') {
							for (var i = 0, len = newval.length; i < len; i++) {
								self.selectedIds[Number(newval[i])] = true
							}
						}
					}
					self.refreshIds()
				}

				function toDetails()	{
					$state.go('servicedetails', {ids: self.idslist})
				}
			}
		}
	}
})
