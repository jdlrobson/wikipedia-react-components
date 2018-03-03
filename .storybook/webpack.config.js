const path = require('path');

module.exports = {

    module: {
        rules: [
          {
            test: /\.(svg)$/,
            loader: 'svg-url-loader'
          },
          {
            test: /\.(gif|png|jpg)$/,
            loader: 'url-loader',
            query: {
              limit: '25000'
            },
          },
            {
                exclude: /node_modules/,
                test: /\.css$/,
                loaders: ["style-loader", "css-loader"],
                include: path.resolve(__dirname, '../')
            },
            {
                exclude: /node_modules/,
                test: /\.less$/,
                loaders: ["style-loader", "css-loader", "less-loader"],
                include: path.resolve(__dirname, '../')
            }
        ]
    }
}