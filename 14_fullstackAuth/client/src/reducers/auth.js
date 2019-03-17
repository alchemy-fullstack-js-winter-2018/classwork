import { SET_TOKEN } from '../actions/auth';

const initialState = {
  token: '',
  id: '',
  name: '',
  picture: ''
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case SET_TOKEN:
      return { ...state, ...payload };
    default:
      return state;
  }
}
