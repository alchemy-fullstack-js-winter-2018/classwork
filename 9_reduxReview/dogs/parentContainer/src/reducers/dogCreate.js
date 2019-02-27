import {
  DOG_CREATE_UPDATE_NAME,
  DOG_CREATE_UPDATE_AGE,
  DOG_CREATE_UPDATE_WEIGHT,
  DOG_CREATE
} from '../actions/dogCreate';

const initialState = {
  name: '',
  age: '',
  weight: ''
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case DOG_CREATE_UPDATE_NAME:
      return {
        ...state,
        name: action.payload
      };
    case DOG_CREATE_UPDATE_AGE:
      return {
        ...state,
        age: action.payload
      };
    case DOG_CREATE_UPDATE_WEIGHT:
      return {
        ...state,
        weight: action.payload
      };
    case DOG_CREATE:
      return initialState;
    default:
      return state;
  }
}
