define([
		'angular',
		'angular-ui-router',
		'angular-ui-select',
		'angular-sanitize',
		'angular-resource',
		'angular-cookies',
		'login/loginpage.component',
		'login/loginform.component',
		'login/registrationform.component',
		'pages/mainpage.component',
		'elements/appheader.component',
		'elements/sessionchecker.component',
		'elements/datatable.component',
		'services/auth.service',
		'services/util.service',
		'services/transactions.service',
		'services/sessionchecker.interceptor'
	], function(
			angular,
			uirouter,
			uiselect,
			ngsanitize,
			ngresource,
			ngcookies,
			loginpageComponent,
			loginformComponent,
			registrationformComponent,
			mainpageComponent,
			appheaderComponent,
			sessioncheckerComponent,
			datatableComponent,
			authService,
			utilService,
			transactionsService,
			sessioncheckerInterceptor
	) {
		//lots of manual configuration. Might need rethinking but seems like a
		//reasonable solution for a single module AMD app.
		return angular.module('mainapp', ['ui.router', 'ui.select', 'ngSanitize', 'ngResource', 'ngCookies'])
				.component(loginpageComponent.name, loginpageComponent.config)
				.component(loginformComponent.name, loginformComponent.config)
				.component(registrationformComponent.name, registrationformComponent.config)
				.component(mainpageComponent.name, mainpageComponent.config)
				.component(appheaderComponent.name, appheaderComponent.config)
				.component(sessioncheckerComponent.name, sessioncheckerComponent.config)
				.component(datatableComponent.name, datatableComponent.config)
				.factory(authService.name, authService.config)
				.factory(utilService.name, utilService.config)
				.factory(transactionsService.name, transactionsService.config)
				.factory(sessioncheckerInterceptor.name, sessioncheckerInterceptor.config)
})
