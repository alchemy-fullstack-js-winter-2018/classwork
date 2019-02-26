import React, { PureComponent } from 'react';
import store from '../../store';
import AddPizzaForm from '../../components/pizzas/AddPizzaForm';
import { createCheesePizza, updateNewPizzaSize } from '../../actions/pizza';
import { getNewPizzaSize } from '../../selectors/pizza';

export default class CreateCheesePizza extends PureComponent {
  updatePizzaSize = ({ target }) => {
    store.dispatch(updateNewPizzaSize(target.value));
  }

  createPizza = event => {
    event.preventDefault();
    store.dispatch(createCheesePizza(getNewPizzaSize(store.getState())));
  }

  render() {
    return <AddPizzaForm onSubmit={this.createPizza} onChange={this.updatePizzaSize} />
  }
}
