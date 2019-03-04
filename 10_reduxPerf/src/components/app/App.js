import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import TopWords from '../../containers/words/TopWords';
import Searchable from '../words/Searchable';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={TopWords} />
        <Route exact path="/words/:count" component={Searchable} />
      </Switch>
    </Router>
  );
}
