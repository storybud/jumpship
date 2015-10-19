module.exports = {
	build: {
		options: {
			beautify: true
		},
		files: [
			{
				expand: true,
				cwd: '<%= SRC %>/js/',
				src: ['*.js'],
				dest: '<%= BUILD %>/js/',
				ext: '.min.js'
			}
		]
	}
}