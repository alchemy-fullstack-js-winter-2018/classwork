import React, { PureComponent } from 'react';
import figlet from 'figlet';

export default class App extends PureComponent {
  state = {
    count: 0,
    text: '',
    formatedText: ''
  };

  formatText = () => {
    const font = 'Ghost';
    figlet.text(this.state.text,
      { font },
      (err, formatedText) => {
        if(err) return console.error(err);

        this.setState({ formatedText });
      });
  };

  handleClick = () => {
    const { count } = this.state;
    this.setState({ count: count + 1 }, () => {
      console.log('Click', this.state.count);
    });
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value }, () => {
      this.formatText();
    });
  };

  render() {
    const { text, formatedText } = this.state;
    return (
      <>

        <input type="text" name="text" value={text} onChange={this.handleChange} />
        <h1>{text}</h1>
        <h2><pre>{formatedText}</pre></h2>
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
