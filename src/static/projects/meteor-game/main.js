requirejs.config({
		//urlArgs: "bust=" +  (new Date()).getTime(),	//cache-bust if needed
	baseUrl: 'src',
	paths: {
			Phaser: '../libs/phaser.min',
		lodash: '../libs/lodash.min'
	},
	map: {
			'*': {
				phaser: 'Phaser'
		}
	}
});
require(['app'],
	function(App) {
			"use strict";
		var app = new App('#app');
	}
);
