import React, { PureComponent } from 'react';
import figlet from 'figlet';
import domToImage from 'dom-to-image';
import fileSaver from 'file-saver';
import TextFormatter from './TextFormatter';
import FormatDisplay from './FormatDisplay';

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

  saveFile = () => {
    fileSaver.saveAs(this.state.img);
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
          handleChange={this.handleChange}
          textToImage={this.textToImage}
        />
        <FormatDisplay
          formattedText={formattedText}
          formattedTextRef={this.formattedTextRef}
        />
        {img && <img src={img} />}
        {img && <button onClick={this.saveFile}>Save File</button>}
        <button onClick={this.handleClick}>Click</button>
      </>
    );
  }
}
