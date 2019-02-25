import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import { ROUTES, getRoutes } from '../routes';

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    // data() {}
    this.state = {
      name: ''
    };

    // this.handleChange = this.handleChange.bind(this);
  }
  // state = {
  //   name: ''
  // };

  componentDidMount() {
    console.log('componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    if(nextProps !== this.props || nextState !== this.state) {
      // update if props or state changes
      return true;
    } else {
      // do not update if props and state have not changed
      return false;
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.name !== this.state.name) {
      // conditionally do something if name changed
    }
    console.log('componentDidUpdate', prevProps, prevState);
  }

  // vue methods
  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };


  render() {
    const title = 'hi there';

    const dogs = ['rover', 'bingo', 'spot'];
    // v-model="name"
    // v-bind and @keyup
    return (
      <>
        <Router>
          <>
            <Link to={ROUTES.HOME.linkTo()}>Back to Home</Link>
            <Link to={ROUTES.ABOUT.linkTo(12345)}>To About 12345</Link>
            <Switch>
              {getRoutes()}
              <Route path="/hi" render={() => <h1>HIHIHIHIHIIHIHHI</h1>} />
            </Switch>
          </>
        </Router>
        {/* {this.state.name !== 'ryan' && <About title={title} />}
        <input name="name" value={this.state.name} onChange={this.handleChange} /> */}
      </>
    );
  }
}

function Artist({ match }) {
  return (
    <h1>Artist {match.params.id}</h1>
  );
}

// props: [{title: String }]
const About = ({ title }) => {
  return (
    <h1>{title}</h1>
  );
};

About.propTypes = {
  title: PropTypes.string
};

function Home({ match }) {
  console.log(match);
  return (
    <h1>{match.params.name}</h1>
  );
}

// function withTitle(Component) {
//   return function(title, className) {
//     return function WithTitle(props) {
//       return <Component title={title} {...props} />;
//     };
//   };
// }
const withTitle = Component => (title, className = 'withTitle') => {
  return function WithTitle(props) {
    return (
      <Component className={className} title={title} {...props} />
    );
  };
};

// const withRyanAsTitle = withTitle('ryan');
// const AboutWithRyan = withRyanAsTitle(About);
// const HomeWithRyan = withRyanAsTitle(Home);

const AboutWithTitle = withTitle(About);
const AboutRyan = AboutWithTitle('ryan');
const AboutSpot = AboutWithTitle('spot');
const AboutRover = AboutWithTitle('rover');
