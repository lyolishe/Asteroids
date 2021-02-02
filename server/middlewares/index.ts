import { RequestHandler } from 'express';
import loggerMiddleware from './logger';
import renderMiddleware from './render';

const render: RequestHandler | RequestHandler[] = renderMiddleware;

const logger: RequestHandler = loggerMiddleware();

// eslint-disable-next-line import/prefer-default-export
export {
  render,
  logger,
};
