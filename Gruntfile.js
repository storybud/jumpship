module.exports = function(grunt) {

	var path = require('path');

	require('load-grunt-config')(grunt, {
		configPath: path.join(process.cwd(), 'grunt/config'),
		jitGrunt: {
			customTasksDir: 'grunt/tasks'
		},
		data: {
			SRC: 'src/',
			TEMPLATE: 'src/template/',
			DATA: 'src/data/',
			BUILD: 'build/',
		}
	});
};