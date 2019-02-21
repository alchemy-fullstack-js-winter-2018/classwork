import React, { Component } from 'react';
import PropTypes from 'prop-types';

class App extends Component {
  state = {
    title: 'Hi There'
  };

  changeTitle = () => {
    this.setState(state => {
      return { title: state.title + ' you' };
    });
  };

  render() {
    return (
      <>
        <Header title={this.state.title} />
        <button onClick={this.changeTitle}>Change Title</button>
      </>
    );
  }
}

function Header({ title }) {
  return (
    <h1>{title}</h1>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default App;
