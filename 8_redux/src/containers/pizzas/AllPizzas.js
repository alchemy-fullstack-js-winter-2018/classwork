import React, { PureComponent } from 'react';
import store from '../../store';
import { getAllPizzas } from '../../selectors/pizza'
import Pizzas from '../../components/pizzas/Pizzas';

export default class AllPizza extends PureComponent {
  state = {
    pizzas: [],
    unsubscribe: null
  }

  updateState = () => {
    const currentReduxState = store.getState();
    const pizzas = getAllPizzas(currentReduxState)
    this.setState({ pizzas });
  }

  componentDidMount() {
    this.updateState();
    const unsubscribe = store.subscribe(() => {
      this.updateState();
    });
    this.setState({ unsubscribe });
  }

  componentWillUnmount() {
    this.state.unsubscribe();
  }

  render() {
    return <Pizzas title="All Pizzas" pizzas={this.state.pizzas} />
  }
}
