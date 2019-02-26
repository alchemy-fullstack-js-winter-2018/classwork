import reducer from './pizza';
import { createCheesePizza } from '../actions/pizza'

describe('pizza reducer', () => {
  it('can handle creating a cheese pizza', () => {
    const state = {
      cheese: [],
      pepperoni: []
    };

    const createPizzaAction = createCheesePizza(14);

    const updatedState = reducer(state, createPizzaAction)

    expect(updatedState).toEqual({
      cheese: [{ name: 'cheese', size: 14 }],
      pepperoni: []
    });
    expect(updatedState.cheese).toContainEqual({ name: 'cheese', size: 14 });
    expect(updatedState.cheese).toHaveLength(1);
    expect(updatedState.pepperoni).toEqual([]);
  });
});
