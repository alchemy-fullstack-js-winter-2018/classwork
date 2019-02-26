export const getAllPizzas = state => {
  return [...state.pizza.cheese, ...state.pizza.pepperoni]
}

export const getCheesePizzas = state => state.pizza.cheese;
export const getLargeCheesePizzas = state => {
  return cheesePizzas(state).filter(pizza => pizza.size > 14);
}

export const getPepperoniPizzas = state => state.pizza.pepperoni;
export const getSmallPepperoniPizzas = state => {
  return pepperoniPizzas(state).filter(pizza => pizza.size <= 14);
}

export const getNewPizzaSize = state => state.pizza.newPizzaSize
