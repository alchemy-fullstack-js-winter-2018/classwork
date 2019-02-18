import React, { Fragment } from 'react';
import Main from './Main';
import Header from './Header';
import Footer from './Footer';
import 'normalize.css';

export default function App() {
  return (
    <Fragment>
      <Header title="My photo site" />
      <Main photo="../assets/tree1.jpg" />
      <Footer name="Ryan" />
    </Fragment>
  );
}
