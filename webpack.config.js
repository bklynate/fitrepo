var webpack = require("webpack");
var path = require("path");

module.exports = {
  entry: [
    "script!jquery/dist/jquery.min.js",
    "script!foundation-sites/dist/js/foundation.min.js",
    "./app/app.jsx"
  ],
  externals: {
    jquery: "jQuery"
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ],
  output: {
    path: __dirname,
    filename: "./public/bundle.js"
  },
  resolve: {
    root: __dirname,
    alias: {
      applicationStyles: "app/styles/app.scss",
      Main: "app/components/Main.jsx",
      Nav: "app/components/Nav.jsx",
      Macroguide: "app/components/Macroguide.jsx",
      Macrotracker: "app/components/Macrotracker.jsx",
      MacroForm: "app/components/MacroForm.jsx",
      DeductMacros: "app/components/DeductMacros.jsx",
      Counter: "app/components/Counter.jsx",
      Login: "app/components/Login.jsx"
    },
    extensions: ["", ".js", ".jsx"]
  },
  module: {
    loaders: [
      {
        loader: "babel-loader",
        query: {
          presets: ["react", "es2015", "stage-0"]
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, "./node_modules/foundation-sites/scss"),
      path.resolve(__dirname, "./node_modules/foundation-sites/dist/css")
    ]
  },
  devtool: "eval-source-map"
};
