module.exports = {
  entry: "./app/App.js",
  output: {
    filename: "public/bundle.js"
  },
  module: {
    loaders: [
      {
      	test: /\.jsx?$/,
      	exclude: /node_modules/, 
      	loader: 'babel?stage=0'
      },
      {
        test:/\.css$/,
        loader: "style-loader!css-loader"
      }
    ]
  }
};