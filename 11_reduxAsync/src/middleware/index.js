import { thunk } from './thunk';
import { logger } from './logger';

export const middleware = [
  logger,
  thunk
];
