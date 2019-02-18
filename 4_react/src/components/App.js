import React, { Fragment } from 'react';
import Header from './Header';
import Dogs from './Dogs';
import Footer from './Footer';

function App() {
  const dogNames = ['rover', 'bingo', 'spot'];

  return (
    <Fragment>
      <Header />
      <Dogs dogs={dogNames} />
      <Footer />
    </Fragment>
  );
}

export default App;
