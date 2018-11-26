const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')


const getFullUrl = endDir => path.join(process.cwd(), endDir)

const config = {
  entry: './src/index.tsx',
  output: {
    path: getFullUrl('dist'),
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$|\.js$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    })
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          output: {
            comments: false
          }
        }
      })
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      components: getFullUrl('src/components/'),
      containers: getFullUrl('src/containers/'),
      store: getFullUrl('src/store/'),
      utils: getFullUrl('src/utils/'),
      config: getFullUrl('src/config'),
      //isDev: process.env.NODE_ENV !== 'production',
      //basename: process.env.PUBLIC_PATH
    }
  }
}

module.exports = config
