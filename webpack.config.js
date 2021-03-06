var debug = process.env.NODE_ENV !== "production";
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const bourbon = require('node-bourbon').includePaths;
const bourbonNeat = require('bourbon-neat').includePaths;

const sassLoaders = [
  'css-loader',
  'postcss-loader',
  'resolve-url',
  'sass-loader?sourceMap'
];

const config = {
  entry: {
    app: ['./src/js/index.jsx']
  },
  devServer: {
    historyApiFallback: true
  },
  devtool: debug ? "inline-sourcemap" : null,
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, './src/styles/'),
      bourbon,
      bourbonNeat,
      './node_modules/megatype/',
      './node_modules/normalize-scss/sass/'
    ]
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(scss|css)$/,
        loader: debug ?
        "style!css!postcss!resolve-url!sass?sourceMap" : ExtractTextPlugin.extract('style-loader', sassLoaders.join('!'))
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: "file-loader?name=images/[name].[ext]"
      },
      {
        test: /\.(html|ejs)$/,
        loader: 'raw-loader'
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/font-woff"
      }, {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/font-woff"
      },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader?name=assets/[name].[ext]"
      },
      { test: /bootstrap[\/\\]dist[\/\\]js[\/\\]umd[\/\\]/, loader: 'imports?jQuery=jquery' },
    ]
  },
  output: {
    filename: 'bundle.min.js',
    path: path.join(__dirname, './build/')
    // publicPath: './build/'
  },
  plugins: debug ?
  [
    new HtmlWebpackPlugin({
      template: 'src/index.ejs', // Load a custom template (ejs by default but can be changed)
    }),
    new webpack.HotModuleReplacementPlugin(),
    new BrowserSyncPlugin(
      // BrowserSync options
      {
        // browse to http://localhost:3000/ during development
        host: 'localhost',
        port: 3000,
        // proxy the Webpack Dev Server endpoint
        // (which should be serving on http://localhost:3100/)
        // through BrowserSync
        proxy: 'http://localhost:8080/'
      },
      // plugin options
      {
        // Since extract-text-webpack-plugin is used to separate the css
        // we can toggle between true/false here to help with reloading html + css changes
        // webpack hot reloading doesn't work with extracted css/sourcemaps/sass
        reload: true
      }
    ),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'RECALLAB_AUTH0_CLIENTID': JSON.stringify(process.env.RECALLAB_AUTH0_CLIENTID),
        'RECALLAB_AUTH0_DOMAIN': JSON.stringify(process.env.RECALLAB_AUTH0_DOMAIN),
        'RECALLAB_API_URL': JSON.stringify(process.env.RECALLAB_API_URL)
      }
    })
  ] : [
    new HtmlWebpackPlugin({
      template: 'src/index.ejs', // Load a custom template (ejs by default but can be changed)
    }),
    new ExtractTextPlugin('styles.css', {
      allChunks: true
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
      "window.Tether": 'tether'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
        'RECALLAB_AUTH0_CLIENTID': JSON.stringify(process.env.RECALLAB_AUTH0_CLIENTID),
        'RECALLAB_AUTH0_DOMAIN': JSON.stringify(process.env.RECALLAB_AUTH0_DOMAIN),
        'RECALLAB_API_URL': JSON.stringify(process.env.RECALLAB_API_URL)
      }
    })
  ],
  postcss: () => [
    require('autoprefixer')
  ],
  resolve: {
    extensions: ['', '.js', '.scss'],
    root: [path.join(__dirname, './src/**'), './node_modules/**']
  }
};

module.exports = config;
