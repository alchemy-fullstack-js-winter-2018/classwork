import React, { PureComponent } from 'react';
import store from '../../store';
import { getCheesePizzas } from '../../selectors/pizza'
import Pizzas from '../../components/pizzas/Pizzas';

export default class CheesePizza extends PureComponent {
  state = {
    pizzas: []
  }

  componentDidMount() {
    const currentReduxState = store.getState();
    const pizzas = getCheesePizzas(currentReduxState)
    this.setState({ pizzas });
  }

  render() {
    return <Pizzas title="Cheese Pizzas" pizzas={this.state.pizzas} />
  }
}
