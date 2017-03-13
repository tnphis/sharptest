define(['angular'], function(angular) {

	return {
		name: 'onetab',
		config: {
			templateUrl: 'app/js/elements/onetab.component.html',
			bindings: {
				//между tabs и tab должна быть двусторонняя связь для обновления active
				tab: '='
			},
			controller: /* @ngInject */ function($scope, $compile, $element, $timeout) {
				var self = this //oh, python...

				self.drawn = false

				$scope.$watch('$ctrl.tab', redrawTabs)


				function redrawTabs(newval, oldval) {
					if (!self.drawn && newval.content) {
						var tab_content = $compile(newval.content)($scope)
						$timeout(function() {
							$element.find('#contentel').append(tab_content)
							self.drawn = true
						})
					}

					if (newval.active != oldval.active) {
						$scope.$apply()
					}
				}
			}
		}
	}
})
