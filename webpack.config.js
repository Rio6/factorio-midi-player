const path = require('path');

module.exports = {
   mode: 'development',
   entry: './index.ts',
   devtool: 'inline-source-map',
   module: {
      rules: [
         {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
         },
         {
            test: /\.bp$/,
            type: 'asset/source',
         },
      ],
   },
   resolve: {
      extensions: [ '.tsx', '.ts', '.js' ],
   },
   output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
   },
};
