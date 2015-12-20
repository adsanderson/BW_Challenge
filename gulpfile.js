var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("webpack");

var WebpackDevServer = require("webpack-dev-server");
var webpackConfig = require("./webpack.config.js");


// The development server (the recommended option for development)
gulp.task("default", ["webpack-dev-server"]);

// Build and watch cycle (another option for development)
// Advantage: No server required, can run app from filesystem
// Disadvantage: Requests are not blocked until bundle is available,
//               can serve an old app on refresh
gulp.task("build-dev", ["webpack:build-dev"], function() {
	gulp.watch(["app/**/*"], ["webpack:build-dev"]);
});

// Production build
gulp.task("build", ["webpack:build"]);

gulp.task("webpack:build", function(callback) {
	// modify some webpack config options
	var myConfig = Object.create(webpackConfig);
	myConfig.plugins = myConfig.plugins.concat(
		new webpack.DefinePlugin({
			"process.env": {
				// This has effect on the react lib size
				"NODE_ENV": JSON.stringify("production")
			}
		}),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin()
	);

	// run webpack
	webpack(myConfig, function(err, stats) {
		if(err) throw new gutil.PluginError("webpack:build", err);
		gutil.log("[webpack:build]", stats.toString({
			colors: true
		}));
		callback();
	});
});

// modify some webpack config options
var myDevConfig = Object.create(webpackConfig);
myDevConfig.devtool = "sourcemap";
myDevConfig.debug = true;

// create a single instance of the compiler to allow caching
var devCompiler = webpack(myDevConfig);

gulp.task("webpack:build-dev", function(callback) {
	// run webpack
	devCompiler.run(function(err, stats) {
		if(err) throw new gutil.PluginError("webpack:build-dev", err);
		gutil.log("[webpack:build-dev]", stats.toString({
			colors: true
		}));
		callback();
	});
});

gulp.task("webpack-dev-server", function(callback) {
	// modify some webpack config options
	var myConfig = Object.create(webpackConfig);
	myConfig.devtool = "eval";
	myConfig.debug = true;

	// Start a webpack-dev-server
	new WebpackDevServer(webpack(myConfig), {
		publicPath: "/" + myConfig.output.publicPath,
		stats: {
			colors: true
		}
	}).listen(8080, "localhost", function(err) {
		if(err) throw new gutil.PluginError("webpack-dev-server", err);
		gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");
	});
});


// Testing

var myTestConfig = Object.create(webpackConfig);
myTestConfig.devtool = "sourcemap";
myTestConfig.debug = true;
myTestConfig.target = "node";
myTestConfig.entry = {
	test: "./test"
};

// create a single instance of the compiler to allow caching
var testCompiler = webpack(myTestConfig);

gulp.task("webpack:build-test", function(callback) {
	// run webpack
	testCompiler.run(function(err, stats) {
		if(err) throw new gutil.PluginError("webpack:build-test", err);
		gutil.log("[webpack:build-test]", stats.toString({
			colors: true
		}));
		callback();
	});
});

var myTestBrowserConfig = Object.create(webpackConfig);
myTestBrowserConfig.devtool = "sourcemap";
myTestBrowserConfig.debug = true;
myTestBrowserConfig.entry = {
	testBrowser: "./test"
};

// create a single instance of the compiler to allow caching
var testCompiler = webpack(myTestBrowserConfig);

gulp.task("webpack:build-test-browser", function(callback) {
	// run webpack
	testCompiler.run(function(err, stats) {
		if(err) throw new gutil.PluginError("webpack:build-test-browser", err);
		gutil.log("[webpack:build-test-browser]", stats.toString({
			colors: true
		}));
		callback();
	});
});


gulp.task("test", ["webpack:build-test"], function () {
    require('./build/test.js');
});