define(['angular', 'underscore'], function(angular, _) {
	return {
		name: 'tabs',
		config: {
			templateUrl: 'app/js/tabs/tabs.component.html',
			transclude: true,
			bindings: {
				tabs: '='
			},
			controller: /* @ngInject */ function($scope, $timeout) {
				var self = this
				self.getActiveClass = getActiveClass
				self.setActiveTab = setActiveTab

				$scope.$watch('$ctrl.tabs', initTabs)


				function getActiveClass(val) {
					if (val) {return 'active'} else {return ''}
				}

				function initTabs(newval) {
					if (newval && newval.length > 0) {
						//if there are no active tabs, activate the first one
						if (!_.find(newval, function(tab) {return tab.active})) {
							self.tabs[0].active = true
						}
					}
				}

				function setActiveTab(id) {
					_.each(self.tabs, function(tab) {
						if (tab.id == id) {
							tab.active = true
						} else {
							tab.active = false
						}
					})
				}
			}
		}
	}
})
