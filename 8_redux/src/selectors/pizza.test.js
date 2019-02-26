import { cheesePizzas } from './pizza';

describe('pizza selectors', () => {
  it('selects only cheese pizzas', () => {
    const state = {
      pizza: {
        cheese: [
          { name: 'cheese', size: 14 },
          { name: 'cheese', size: 18 },
          { name: 'cheese', size: 10 }
        ],
        pepperoni: []
      }
    }

    const selectedCheesePizzas = cheesePizzas(state);
    expect(selectedCheesePizzas).toEqual([
      { name: 'cheese', size: 14 },
      { name: 'cheese', size: 18 },
      { name: 'cheese', size: 10 }
    ])
  });
})
