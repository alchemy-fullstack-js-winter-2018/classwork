import { thunk } from './thunk';
import { logger } from './logger';
import { promiseMiddleware } from './promise';

export const middleware = [
  logger,
  thunk,
  promiseMiddleware
];
