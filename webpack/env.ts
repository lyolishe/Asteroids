const path = require('path');

const mode = (process.env.NODE_ENV || 'development');
const isDev = mode === 'development';

const SRC_DIR = path.join(__dirname, '../src');
const DIST_DIR = path.join(__dirname, '../build');

export {
  mode, isDev, SRC_DIR, DIST_DIR,
};
