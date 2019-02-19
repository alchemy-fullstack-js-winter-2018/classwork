import React, { PureComponent } from 'react';
import figlet from 'figlet';

export default class App extends PureComponent {
  state = {
    count: 0,
    text: '',
    formatedText: '',
    font: 'Basic',
    img: ''
  };

  formatText = () => {
    const { font } = this.state;
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
    const { text, formatedText, font } = this.state;

    const fontOptions = ['Ghost', 'Weird', 'Chunky', 'Basic', 'Lil Devil'].map(f => {
      return <option key={f} value={f}>{f}</option>;
    });

    return (
      <>
        <select name="font" onChange={this.handleChange} value={font}>
          {fontOptions}
        </select>
        <input type="text" name="text" value={text} onChange={this.handleChange} />
        <h1>{text}</h1>
        <h2><pre>{formatedText}</pre></h2>
        <button onClick={this.handleClick}>Click</button>
      </>
    );
  }
}
