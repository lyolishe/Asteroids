import path from 'path';
import express from 'express';
import serverRenderMiddleware from './server-render-middleware';

const app = express();

// Рекомендую использовать только для разработки
// А в production раздавать статику через Nginx или CDN
app
  .use(express.static(path.resolve(__dirname, '../public')))
  .use(express.static(path.resolve(__dirname, '../build')));

app.get('/*', serverRenderMiddleware);

const port = process.env.PORT || 9001;

app.listen(port, () => {
    console.log('Application is started on localhost:', port);
});


export { app };
