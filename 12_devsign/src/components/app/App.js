import React from 'react';
import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';
import { getRoutes } from '../../routes';
import Header from '../header/Header';

export default function App() {
  return (
    <Router>
      <>
        <Header />
        <Switch>
          {getRoutes()}
        </Switch>
      </>
    </Router>
  );
}
