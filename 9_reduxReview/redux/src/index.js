import { createStore } from 'redux';

// store.getState() - returns the current state in our store
// store.dispatch() - which triggers an action or event
// store.subscribe() - which listens for state changes and triggers a callback

const UPDATE_TEXT = 'UPDATE_TEXT';
const updateText = text => ({
  type: UPDATE_TEXT,
  payload: text
})


// @@INIT reducer(undefined, { type: '@@INIT })
const initalState = {
  text: ''
};


function reducer(state = initalState, action) {
  switch (action.type) {
    case UPDATE_TEXT:
      return { text: action.payload }
    default:
      return state;
  }
}

const store = createStore(reducer);

const unsubscribe = store.subscribe(() => {
  console.log('updated', store.getState());
});

// calls the reducer with the current state (store.getState()) and the action
store.dispatch({
  type: 'UPDATE_TEXT',
  payload: 'hi there'
});
store.dispatch(updateText('spot'));



store.dispatch(updateText('bingo'));

unsubscribe();

store.dispatch(updateText('sparky'));

console.log(store.getState());
