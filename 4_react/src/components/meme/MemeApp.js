import React, { Component } from 'react';
import Controls from './Controls';
import DisplayMeme from './DisplayMeme';
import domToImage from 'dom-to-image';
import fileSaver from 'file-saver';

export default class MemeApp extends Component {
  constructor(props) {
    super(props);
    this.memeRef = React.createRef();

    // this.state = {
    //   header: '',
    //   footer: '',
    //   imgUrl: ''
    // };
  }

  state = {
    header: '',
    headerColor: '#000000',
    headerFont: 'cursive',
    footer: '',
    footerColor: '#000000',
    footerFont: 'cursive',
    imgUrl: ''
  };

  generateMeme = async(event) => {
    event.preventDefault();
    const img = await domToImage.toPng(this.memeRef.current);
    fileSaver.saveAs(img);

    // fetch()
    //   .then(res => res.json())
    //   .then(json => {

    //   });

    // const res = await fetch('');
    // const json = await res.json();

  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const {
      header,
      headerColor,
      headerFont,
      footer,
      footerColor,
      footerFont,
      imgUrl
    } = this.state;

    return (
      <>
        <h1>Meme Gen</h1>
        <Controls
          header={header}
          headerColor={headerColor}
          headerFont={headerFont}
          footer={footer}
          footerColor={footerColor}
          footerFont={footerFont}
          imgUrl={imgUrl}
          onChange={this.handleChange}
          onSubmit={this.generateMeme}
        />
        <DisplayMeme
          memeRef={this.memeRef}
          header={header}
          headerColor={headerColor}
          headerFont={headerFont}
          footer={footer}
          footerColor={footerColor}
          footerFont={footerFont}
          imgUrl={imgUrl}
        />
      </>
    );
  }
}
