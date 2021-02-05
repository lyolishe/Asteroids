import path from 'path';
import express from 'express';
import 'babel-polyfill';
import serverRenderMiddleware from './server-render-middleware';

const app = express();

// Рекомендую использовать только для разработки
// А в production раздавать статику через Nginx или CDN
app
  .use(express.static(path.resolve(__dirname, '../public')))
  .use(express.static(path.resolve(__dirname, '../build')));

app.get('/*', serverRenderMiddleware);

export { app };
