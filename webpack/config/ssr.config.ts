import path from 'path';
import { join } from 'path';
import { Configuration } from 'webpack';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import webpackNodeExternals from 'webpack-node-externals';

const fileRegex = /^(?!.*\.inline).*\.(svg|jpe?g|png|gif|eot|woff2?|ttf)$/;

const ROOT_DIR: string = path.join(__dirname, '../../');

const config: Configuration = {
  name: 'ssr_bundles',
  target: 'node',
  devtool: 'source-map',
  entry: join(ROOT_DIR, 'src', 'bundles', 'index.ts'),
  node: { __dirname: false },
  mode: 'development',

  externals: [
    webpackNodeExternals({
      allowlist: [
        /\.(?!(?:jsx?|json)$).{1,5}$/i,
      ],
    }),
  ],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@helpers': path.resolve(__dirname, './src/helpers'),
      '@classes': path.resolve(__dirname, './src/classes'),
      '@pages': path.resolve(__dirname, './src/pages'),
    },
    extensions: ['.js', '.ts', '.tsx', '.json', '.css', '.less'],
    plugins: [
      new TsconfigPathsPlugin(),
    ],
  },
  output: {
    filename: 'ssr.bundles.js',
    libraryTarget: 'commonjs2',
    path: path.join(__dirname, '../../dist'),
    publicPath: '/static/',
  },

  /*stats: {
      all: undefined,
      builtAt: false,
      chunks: false,
      assets: false,
      errors: true,
      warnings: true,
      outputPath: "",
      timings: true,
  },*/

  performance: {
    hints: false,
  },
  module: {
    rules: [
      /*{
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: [
          /node_modules/,
        ],
        loader: 'babel-loader'
      },*/
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: { transpileOnly: true },
      },
      {
        test: fileRegex,
        loader: 'null-loader',
      },
      {
        test: /\.css$/,
        loader: 'null-loader',
      },
      {
        test: /\.less$/,
        loader: 'null-loader',
      },
    ],
  },
};

export default [config];
