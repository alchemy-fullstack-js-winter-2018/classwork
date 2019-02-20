import React, { Component, PureComponent } from 'react';

class Pure extends PureComponent {

  componentDidUpdate() {
    console.log('Pure updated');
  }
  render() {
    console.log('pure rendered');

    return <h1>Pure</h1>;
  }
}

class NonPure extends Component {

  componentDidUpdate() {
    console.log('Component updated');
  }
  render() {
    console.log('component rendered');
    return <h1>Component</h1>;
  }
}

export default class ComponentDemo extends Component {
  state = {
    count: 0,
    countProps: 0
  };

  incrementCount = () => {
    this.setState(state => ({ count: state.count + 1 }));
  };

  incrementCountProps = () => {
    this.setState(state => ({ countProps: state.countProps + 1 }));
  };

  render() {
    const { countProps } = this.state;
    return (
      <>
        <Pure count={countProps} />
        <NonPure count={countProps} />
        <button onClick={this.incrementCount}>Change State</button>
        <button onClick={this.incrementCountProps}>Change Props</button>

      </>
    );
  }
}
