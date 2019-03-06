export const isPromise = payload => {
  return Promise.resolve(payload) === payload;
};

export const promiseMiddleware = store => next => action => {
  // check if action.payload is a promise
  if(!isPromise(action.payload)) {
    // -> if not do the normal thing
    return next(action);
  }
  // -> if it is a promise
  // -> -> dispatch a LOAD_START action
  store.dispatch({ type: 'LOAD_START' });
  // -> -> wait for promise to resolve
  action.payload.then(result => {
    // -> -> -> dispatch LOAD_END action
    store.dispatch({ type: 'LOAD_END' });
    // -> -> -> dispatch original action with results
    store.dispatch({
      type: action.type,
      payload: result
    });
  })
    .catch(err => {
      // -> -> on error dispatch PROMISE_ERROR action
      store.dispatch({
        type: 'PROMISE_ERROR',
        payload: err
      });
    });
};
