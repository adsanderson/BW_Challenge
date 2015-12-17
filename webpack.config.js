var path = require("path");

module.exports = {
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js",
        publicPath: '/build/'
    },
    module: {
        loaders: [{ 
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader: "babel-loader"
            }
        ]
        // loaders: [
        //     { test: /\.css$/, loader: "style!css" }
        // ]
    }
};