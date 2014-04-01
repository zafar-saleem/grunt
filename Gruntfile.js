module.exports = function(grunt) {

	grunt.initConfig({
		
		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			target: {
				src: 'app/scripts/**/*.js'
			}
		},
		uglify: {
			options: {
				mangle: true,
				compress: true,
				sourceMap: 'dist/applications.map',
				banner: '/* Test banner */\n'
			},
			target: {
				src: 'dest/app.js',
				dest: 'dist/scripts/app.min.js'
			}
		},

		uncss: {
			dist: {
				files: [
					{ src: 'app/index.html', dest: 'dist/css/tidy.css' }
				]
			}
		},

		csslint: {
			options: {
				csslintrc: '.csslintrc'
			},
			target: {
				src: 'app/styles/**/*.css'
			}
		},
		cssmin: {
			options: {
				banner: '/* My minified css file */'
			},
			target: {
				src: 'app/styles/**/*.css',
				dest: 'dist/styles/css.min.css'
			}
		},

		concat: {
			options: {
				// separator: ';'
			},
			target: {
				src: 'app/scripts/**/*.js',
				dest: 'dest/app.js'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-uncss');
	grunt.loadNpmTasks('grunt-contrib-csslint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.registerTask('default', ['jshint', 'csslint', 'concat', 'uglify', 'cssmin']);
}
