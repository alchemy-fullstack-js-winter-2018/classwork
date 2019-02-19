import React, { PureComponent } from 'react';
import figlet from 'figlet';
import domToImage from 'dom-to-image';
import fileSaver from 'file-saver';
import TextFormatter from './TextFormatter';
import FormatDisplay from './FormatDisplay';
import FileSaver from './FileSaver';

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

    return (
      <>
        <TextFormatter
          text={text}
          font={font}
          onChange={this.handleChange}
          onSubmit={this.textToImage}
        />
        <FormatDisplay
          formattedText={formattedText}
          formattedTextRef={this.formattedTextRef}
        />
        {img && <FileSaver img={img} />}
        <button onClick={this.handleClick}>Click</button>
      </>
    );
  }
}
