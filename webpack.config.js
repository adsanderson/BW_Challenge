var path = require("path");

module.exports = {    
    entry: {
        bundle: "./src/main.js"
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
            { test: /\.css$/, loader: "style-loader!css-loader" }
        ]        
    },
    plugins: []
};