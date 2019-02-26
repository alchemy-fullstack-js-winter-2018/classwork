import React, { PureComponent } from 'react';
import store from '../../store';
import { getAllPizzas } from '../../selectors/pizza'
import Pizzas from '../../components/pizzas/Pizzas';

export default class AllPizza extends PureComponent {
  state = {
    pizzas: []
  }

  componentDidMount() {
    const currentReduxState = store.getState();
    const pizzas = getAllPizzas(currentReduxState)
    this.setState({ pizzas });
  }

  render() {
    return <Pizzas title="All Pizzas" pizzas={this.state.pizzas} />
  }
}
