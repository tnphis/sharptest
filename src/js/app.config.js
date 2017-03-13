define([
		'angular',
		'angular-ui-router',
		'angular-ui-select',
		'angular-sanitize',
		'angular-resource',
		'login/loginpage.component',
		'login/loginform.component',
		'login/registrationform.component'
	], function(
			angular,
			uirouter,
			uiselect,
			ngsanitize,
			ngresource,
			loginpageComponent,
			loginformComponent,
			registrationformComponent
	) {
		//lots of manual configuration. Might need rethinking but seems like a
		//reasonable solution for a single module AMD app.
		return angular.module('mainapp', ['ui.router', 'ui.select', 'ngSanitize', 'ngResource'])
				.component(loginpageComponent.name, loginpageComponent.config)
				.component(loginformComponent.name, loginformComponent.config)
				.component(registrationformComponent.name, registrationformComponent.config)
})
