export const CREATE_CHEESE_PIZZA = 'CREATE_CHEESE_PIZZA';
export const createCheesePizza = size => ({
  type: CREATE_CHEESE_PIZZA,
  payload: { size }
});

export const CREATE_PEPPERONI_PIZZA = 'CREATE_PEPPERONI_PIZZA'
export const createPepperoniPizza = size => ({
  type: CREATE_PEPPERONI_PIZZA,
  payload: { size }
});

export const NEW_PIZZA_SIZE_UPDATE = 'NEW_PIZZA_SIZE_UPDATE';
export const updateNewPizzaSize = size => ({
  type: NEW_PIZZA_SIZE_UPDATE,
  payload: size
});
