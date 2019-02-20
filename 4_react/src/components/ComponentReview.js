import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ComponentReview extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }
  state = {
    title: 'Hi There'
  };

  handleTextChange = () => {
    // this.state.title is the title at the time handleTextChange is called
    // but this.setState happen async, at some time in the near future
    // so this.state.title may already be out of date
    this.setState({ title: this.state.count + 1 });

    // grabs the current state
    this.setState(state => {
      return { title: state.title + ' you' };
    }, () => {
      console.log('waiting', this.state.title);
    });
    console.log('badd', this.state.title);
  };

  render() {
    let title = this.state.title;
    return (
      <>
        <Header title={title} subHeader="My sub header" />
        <Footer title={title} />
        <button onClick={this.handleTextChange}>Change Title</button>
      </>
    );
  }
}

function Header({ title, subHeader }) {
  return (
    <>
      <h1>{title}</h1>
      {subHeader && <SubHeader subTitle={subHeader} />}
    </>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subHeader: PropTypes.string
};

function Footer({ title }) {
  return (
    <h1>My footer {title}</h1>
  );
}

function SubHeader({ subTitle }) {
  return (
    <h2>{subTitle}</h2>
  );
}

SubHeader.propTypes = {
  subTitle: PropTypes.string.isRequired
};

export default ComponentReview;
