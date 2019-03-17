import { createAction } from 'promise-middleware-redux';
import { handleAuth } from '../services/auth';

export const [
  setToken,
  SET_TOKEN
] = createAction('SET_TOKEN', handleAuth);
