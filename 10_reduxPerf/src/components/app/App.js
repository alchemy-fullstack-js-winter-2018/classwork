import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import TopWords from '../../containers/words/TopWords';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={TopWords} />
        <Route exact path="/words/:count" component={TopWords} />
      </Switch>
    </Router>
  );
}
