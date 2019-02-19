import React, { PureComponent } from 'react';
import figlet from 'figlet';
import 'normalize.css';
import { promisify } from 'util';
import domToImage from 'dom-to-image';
import fileSaver from 'file-saver';

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.textRef = React.createRef();
  }
  state = {
    counter: 0,
    text: '',
    font: 'Big',
    formatedText: '',
    img: ''
  };

  textToImage = async(event) => {
    event.preventDefault();
    const img = await domToImage.toPng(this.textRef.current);
    this.setState({ img });
  };

  saveFile = () => {
    fileSaver.saveAs(this.state.img);
  };

  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 }, () => {
      console.log(this.state.counter);
    });
  };

  formatText = async() => {
    const { text, font } = this.state;
    const formatedText = await promisify(figlet.text)(text, { font });

    this.setState({ formatedText });
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value }, () => {
      this.formatText();
    });
  };

  render() {
    const { text, formatedText, font, img } = this.state;
    const options = ['Big', 'Block', 'Big Money-ne', 'Basic', 'Banner3-D'].map(f => {
      return (
        <option key={f} value={f}>{f}</option>
      );
    });

    return (
      <>
        <form onSubmit={this.textToImage}>
          <select name="font" onChange={this.handleChange} value={font}>
            {options}
          </select>
          <input name="text" value={text} onChange={this.handleChange} />
          <button type="submit">Submit</button>
        </form>
        <h1 ref={this.textRef}><pre>{formatedText}</pre></h1>
        {img && <img src={img} />}
        {img && <button onClick={this.saveFile}>Save</button>}
      </>
    );
  }
}
