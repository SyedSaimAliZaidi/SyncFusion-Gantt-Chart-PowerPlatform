const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js", // Entry point of your application
  output: {
    filename: "bundle.js", // Output bundle file
    path: path.resolve(__dirname, "dist"), // Output directory
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Apply this rule to .js files
        exclude: /node_modules/, // Exclude node_modules directory
        use: {
          loader: "babel-loader", // Use babel-loader to transpile JavaScript files
        },
      },
      {
        test: /\.css$/, // Apply this rule to .css files
        use: ["style-loader", "css-loader"], // Use style-loader and css-loader to handle CSS files
      },
      {
        test: /\.(png|svg|jpg|gif)$/, // Apply this rule to image files
        use: ["file-loader"], // Use file-loader to handle image files
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // Template HTML file
    }),
  ],
  devServer: {
    static: path.join(__dirname, "dist"), // Serve content from the dist directory
    compress: true, // Enable gzip compression
    port: 9000, // Port to run the development server
  },
  devtool: "source-map", // Add a valid devtool configuration
  resolve: {
    fallback: {
      crypto: require.resolve("crypto-browserify"),
    },
  },
};
