import { thunk } from './thunk';
import { logger } from './logger';
import { promiseMiddleware } from 'promise-middleware-redux';

export const middleware = [
  logger,
  thunk,
  promiseMiddleware
];
