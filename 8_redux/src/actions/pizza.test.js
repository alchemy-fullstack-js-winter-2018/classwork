import {
  createCheesePizza,
  CREATE_CHEESE_PIZZA
} from './pizza';

describe('pizza action creators', () => {
  it('can create a create cheese pizza action', () => {
    const action = createCheesePizza(14);

    expect(action).toEqual({
      type: CREATE_CHEESE_PIZZA,
      payload: { size: 14 }
    });
  });
});
