import React, { PureComponent } from 'react';

export default class App extends PureComponent {
  state = {
    count: 0,
    text: '',
    formatedText: ''
  };

  handleClick = () => {
    const { count } = this.state;
    this.setState({ count: count + 1 }, () => {
      console.log('Click', this.state.count);
    });
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { text, anotherText } = this.state;
    return (
      <>

        <input type="text" name="text" value={text} onChange={this.handleChange} />
        <input type="text" name="anotherText" value={anotherText} onChange={this.handleChange} />
        <h1>{text}</h1>
        <h2>{anotherText}</h2>
        <button onClick={this.handleClick}>Click</button>
      </>
    );
  }
}

// function App() {
//   return (
//     <h1>Hi</h1>
//   );
// }
