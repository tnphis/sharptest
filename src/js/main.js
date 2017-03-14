"use strict";

//not how it's normally done
window.Global = {
	apiurl: 'http://193.124.114.46:3001'
}

require(['require.config', 'app.routes'], function(conf, app) {
		app.initialize();
	}
);
