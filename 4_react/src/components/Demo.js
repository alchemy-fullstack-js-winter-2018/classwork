import React, { PureComponent } from 'react';
import figlet from 'figlet';
import domToImage from 'dom-to-image';

export default class App extends PureComponent {
  constructor(props) {
    // super calls PureComponents constructor
    super(props);

    this.formattedTextRef = React.createRef();
  }

  state = {
    count: 0,
    text: '',
    formattedText: '',
    font: 'Basic',
    img: ''
  };

  textToImage = event => {
    event.preventDefault();
    domToImage.toPng(this.formattedTextRef.current)
      .then(img => {
        this.setState({ img });
      });
  };

  formatText = () => {
    const { font } = this.state;
    figlet.text(this.state.text,
      { font },
      (err, formattedText) => {
        if(err) return console.error(err);

        this.setState({ formattedText });
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
    const { text, formattedText, font, img } = this.state;

    const fontOptions = ['Ghost', 'Weird', 'Chunky', 'Basic', 'Lil Devil'].map(f => {
      return <option key={f} value={f}>{f}</option>;
    });

    return (
      <>
        <form onSubmit={this.textToImage}>
          <select name="font" onChange={this.handleChange} value={font}>
            {fontOptions}
          </select>
          <input type="text" name="text" value={text} onChange={this.handleChange} />
          <button type="submit">Create Image</button>
        </form>
        <h1>{text}</h1>
        <h2 ref={this.formattedTextRef}><pre>{formattedText}</pre></h2>
        {img && <img src={img} />}
        <button onClick={this.handleClick}>Click</button>
      </>
    );
  }
}
