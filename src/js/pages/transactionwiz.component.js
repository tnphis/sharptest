define(['angular'], function(angular) {
	return {
		name: 'servicedetails',
		config: {
			templateUrl: 'app/js/pages/details.component.html',
			bindings: {
				services: '<',
				ids: '<'
			},
			controller: /* @ngInject */ function($scope, $state) {
				var self = this
				self.toList = toList

				function toList() {
					$state.go('serviceslist', {ids: self.ids})
				}
			}
		}
	}
})
