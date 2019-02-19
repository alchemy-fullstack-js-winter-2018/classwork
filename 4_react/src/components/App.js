import React, { Fragment } from 'react';
import Header from './Header';
import Dogs from './Dogs';
import Footer from './Footer';
import 'normalize.css';
import './App.css';

function App() {
  const dogNames = [
    { name: 'rover', about: 'good dog' },
    { name: 'bingo', about: 'bad dog' },
    { name: 'spot', about: 'ok dog' }
  ];

  return (
    <Fragment>
      <Header />
      <Dogs namesOfDogs={dogNames} />
      <Footer />
    </Fragment>
  );
}

export default App;
