import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllTweets from '../../containers/tweets/AllTweets';
import { login } from '../../services/auth';
import Callback from '../../containers/auth/Callback';
import { withSession } from '../../containers/auth/withSession';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/callback" component={Callback} />
        <Route path="/" component={withSession(AllTweets)} />
      </Switch>
    </Router>
  );
}
