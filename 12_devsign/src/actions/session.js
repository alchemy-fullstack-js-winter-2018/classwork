import { createAction } from 'promise-middleware-redux';
import { handleAuth } from '../services/auth';

export const [
  setSession,
  SET_SESSION,
  SET_SESSION_PENDING
] = createAction('SET_SESSION', handleAuth);
