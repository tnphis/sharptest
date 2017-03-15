define(['angular'], function(angular) {

	return {
		name: 'onetab',
		config: {
			templateUrl: 'app/js/tabs/onetab.component.html',
			transclude: true,
			bindings: {
				//tabs and one tab need to share the scope to properly set the active property
				tab: '='
			},
			controller: /* @ngInject */ function($scope, $compile, $element, $timeout) {
				var self = this //oh, python...

				self.drawn = false

				$scope.$watch('$ctrl.tab', redrawTabs)


				function redrawTabs(newval, oldval) {
					if (newval.active != oldval.active) {
						$scope.$apply()
					}
				}
			}
		}
	}
})
