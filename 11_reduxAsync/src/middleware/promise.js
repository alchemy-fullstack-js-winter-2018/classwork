export const isPromise = payload => {
  return Promise.resolve(payload) === payload;
};

export const LOAD_START = 'LOAD_START';
export const LOAD_END = 'LOAD_END';
export const PROMISE_ERROR = 'PROMISE_ERROR';

export const promiseMiddleware = ({ dispatch }) => next => action => {
  const {
    type,
    loadStart = LOAD_START,
    loadEnd = LOAD_END,
    errorType = PROMISE_ERROR
  } = action;
  // check if action.payload is a promise
  if(!isPromise(action.payload)) {
    // -> if not do the normal thing
    return next(action);
  }
  // -> if it is a promise
  // -> -> dispatch a LOAD_START action
  dispatch({ type: loadStart });
  // -> -> wait for promise to resolve
  action.payload.then(payload => {
    // -> -> -> dispatch original action with results
    dispatch({
      type,
      payload
    });
    // -> -> -> dispatch LOAD_END action
    dispatch({ type: loadEnd });
  })
    .catch(err => {
      // -> -> on error dispatch PROMISE_ERROR action
      dispatch({
        type: errorType,
        payload: err
      });
      dispatch({ type: loadEnd });
    });
};
