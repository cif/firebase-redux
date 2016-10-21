var path = require('path');
var webpack = require('webpack');
var WebpackDevServer = require ('webpack-dev-server');

var server;
var PORT = '3000';
var HOST = 'localhost';

var config = {
  entry: ['./src/app.js', 'webpack/hot/only-dev-server'],
  output: {
    filename: 'dev.js',
    path: path.resolve(__dirname, 'public/')
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
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
