import express, { Express } from 'express';
import { render, logger } from './middlewares';
import router from './router';

const { PORT = 3000 } = process.env;

const server: Express = express();

server
  .disable('x-powered-by')
  .enable('trust proxy')
  .use(render)
  .use(logger)
  .use(router);

server.listen(PORT, () => {
  console.log(`Running on port:${PORT}`);
});
