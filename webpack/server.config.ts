import path from 'path';
import { Configuration } from 'webpack';
import nodeExternals from 'webpack-node-externals';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';

import {
  isDev, mode, SRC_DIR, DIST_DIR,
} from './env';

const fileRegex = /^(?!.*\.inline).*\.(svg|jpe?g|png|gif|eot|woff2?|ttf)$/;

const config: Configuration = {
  name: 'server',
  target: 'node',
  externals: [
    nodeExternals({ allowlist: [/\.(?!(?:tsx?|json)$).{1,5}$/i] }),
  ],
  entry: path.join(SRC_DIR, 'server'),
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['*', '.js', '.jsx', '.json', '.ts', '.tsx'],
    plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })],
  },
  output: {
    filename: 'server.js',
    libraryTarget: 'commonjs2',
    path: DIST_DIR,
    publicPath: '/static/',
  },
  optimization: { nodeEnv: false },
  devtool: isDev ? 'inline-source-map' : false,
  module: {
    rules: [
      {
        loader: 'null-loader',
        test: fileRegex,
      },
      {
        test: /\.css$/,
        loader: 'null-loader',
      },
      {
        test: /\.less/,
        loader: 'null-loader',
      },
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' },
      },
    ],
  },
};

export default config;
