//A basic tabs component.
//Probably there are better ones out there but I just had this one ready and it works.
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
