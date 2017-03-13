require.config({
	paths: {
		'jquery': '/app/lib/jquery/dist/jquery.min',
		'angular': '/app/lib/angular/angular.min',
		'angular-ui-router': '/app/lib/angular-ui-router/release/angular-ui-router.min',
		'bootstrap': '/app/lib/bootstrap/dist/js/bootstrap.min',
		'underscore': '/app/lib/underscore/underscore-min',
		'datatables.net': '/app/lib/datatables.net/js/jquery.dataTables.min',
		'datatables.net-bs': '/app/lib/datatables.net/js/dataTables.bootstrap.min',
		'angular-ui-select': '/app/lib/angular-ui-select/dist/select.min',
		'angular-sanitize': '/app/lib/angular-sanitize/angular-sanitize.min',
		'angular-resource': '/app/lib/angular-resource/angular-resource.min'
	},
	shim: {
		'angular': {
			exports: 'angular',
			deps: ['jquery'] //обязательно для корректной работы $element.find
		},
		'angular-ui-select': {
			exports: 'angular-ui-select',
			deps: ['angular']
		},
		'angular-sanitize': {
			exports: 'angular-sanitize',
			deps: ['angular']
		},
		'angular-resource': {
			exports: 'angular-resource',
			deps: ['angular']
		}
	},
	urlArgs: 'v=0.1'
})
