export const isPromise = payload => {
  return Promise.resolve(payload) === payload;
};

export const PENDING = 'PENDING';
export const FULFILLED = 'FULFILLED';
export const REJECTED = 'REJECTED';

export const createAction = (type, promise) => ({
  type,
  payload: promise,
  pendingType: `${type}_${PENDING}`,
  fulfilledType: `${type}_${FULFILLED}`,
  rejectedType: `${type}_${REJECTED}`
});

export const promiseMiddleware = ({ dispatch }) => next => action => {
  const {
    type,
    pendingType = PENDING,
    fulfilledType = FULFILLED,
    rejectedType = REJECTED
  } = action;
  // check if action.payload is a promise
  if(!isPromise(action.payload)) {
    // -> if not do the normal thing
    return next(action);
  }
  // -> if it is a promise
  // -> -> dispatch a LOAD_START action
  dispatch({ type: pendingType });
  // -> -> wait for promise to resolve
  action.payload.then(payload => {
    // -> -> -> dispatch original action with results
    dispatch({
      type,
      payload
    });
    // -> -> -> dispatch LOAD_END action
    dispatch({ type: fulfilledType });
  })
    .catch(err => {
      // -> -> on error dispatch PROMISE_ERROR action
      dispatch({
        type: rejectedType,
        payload: err
      });
    });
};
