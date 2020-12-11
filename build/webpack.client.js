const path = require("path");

module.exports = {
　　entry: './src/app.client.jsx',
　　output: {
　　　　filename: "bundle.client.js",
　　　　path: path.resolve(__dirname, "../dist")
　　},
　　module: {
        rules: [
            {
                test: /.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-react'
                        ]
                    }
                }
            },
            {
                test: /.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ]
                    }
                }
            },
        ]
    }
};