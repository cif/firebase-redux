var path = require('path');
var webpack = require('webpack');
var WebpackDevServer = require ('webpack-dev-server');

var server;
var PORT = '3000';
var HOST = 'localhost';

var config = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:' + PORT,
    './src/app.js',
    'webpack/hot/only-dev-server'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/dist')
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.SourceMapDevToolPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot-loader/webpack', 'babel'],
        include: path.resolve('./src'),
        exclude: path.resolve('./node_modules/')
      }
    ]
  },
  "resolve": {
    extensions: ['', '.js']
  }
};

server = new WebpackDevServer(webpack(config), {
  contentBase: 'public/',
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true
  }
});

server.listen(PORT, HOST, function(err) {
  if (err) {
    console.log(err);
  }

  console.log('Dev server started on ' + PORT);
});
