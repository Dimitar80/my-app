const path = require('path');

module.exports = {
    entry: './ec/main.js',
    output: {
        path: path.resolve(__dirname, 'ec'),
        filename: 'bundle.js',
        // publicPath: '/src/'
    },

    devServer: {
        contentBase: path.join(__dirname, 'ec'),
        compress: true,
        port: 8080,
        historyApiFallback: true
        // publicPath: '/src/'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader", "source-map-loader"]
                
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
              },
        ]
    }
};