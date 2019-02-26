import {
  CREATE_CHEESE_PIZZA,
  CREATE_PEPPERONI_PIZZA,
  NEW_PIZZA_SIZE_UPDATE
} from '../actions/pizza';

const initialState = {
  newPizzaSize: 14,
  cheese: [{ name: 'cheese', size: 14 }],
  pepperoni: [{ name: 'pepperoni', size: 18 }]
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_CHEESE_PIZZA:
      return {
        ...state,
        cheese: [
          ...state.cheese,
          { name: 'cheese', ...action.payload }
        ]
      };
    case CREATE_PEPPERONI_PIZZA:
      return {
        ...state,
        pepperoni: [
          ...state.pepperoni,
          { name: 'pepperoni', ...action.payload }
        ]
      };
    case NEW_PIZZA_SIZE_UPDATE:
      return { ...state, newPizzaSize: action.payload };
    default:
      return state;
  }
}
