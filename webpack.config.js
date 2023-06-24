const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path:path.resolve(__dirname, "src", "dist"),
  },
  module: {
    rules: [
        {
            test: /\.html$/,
            exclude: [/node_modules/, require.resolve('./index.html')],
            use: {
                loader: 'file-loader',
                query: {
                    name: '[name].[ext]'
                },
            },
        },
    {
    test: /\.css$/i,
    use: ["style-loader", "css-loader"],
    },
        {
            test: /\.(png|jp(e*)g|svg|gif)$/,
            use: ['file-loader'],
          },
          {
            test: /\.svg$/,
            use: ['@svgr/webpack'],
          },
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
  ],
}