import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/artist/:id" component={Artist} />
        <Route path="/work/:id" component={Work} />
        <Route path="/" component={Search} />
      </Switch>
    </Router>
  );
}

function Search() {
  return (
    <>
      <h1>Search</h1>
    </>
  );
}

function Artist() {
  return <h1>Artist</h1>;
}

function Work() {
  return <h1>Work</h1>;
}
