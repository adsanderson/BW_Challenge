var path = require("path");

module.exports = {
    target: 'node',
    entry: {
        bundle: "./src/main.js",
        test: "./test"
    },
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "[name].js",
        publicPath: '/build/'
    },
    module: {
        loaders: [{ 
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader: "babel-loader"
            },
             { test: /\.json$/, loader: "json" },
        ]
        // loaders: [
        //     { test: /\.css$/, loader: "style!css" }
        // ]
    },
    plugins: []
};