import { DOG_CREATE, DOG_CREATE_UPDATE_AGE } from '../actions/dogCreate';

const initialState = {
  dogList: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case DOG_CREATE:
      return {
        dogList: [...state.dogList, action.payload]
      };
    default:
      return state;
  }
}
