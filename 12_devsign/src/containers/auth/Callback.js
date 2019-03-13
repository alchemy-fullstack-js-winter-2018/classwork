import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setSession } from '../../actions/session';
import { getToken } from '../../selectors/session';
import { ROUTES } from '../../routes';

class Callback extends React.PureComponent {
  static propTypes = {
    token: PropTypes.string.isRequired,
    handleAuth: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.handleAuth();
  }

  render() {
    if(this.props.token) {
      return <Redirect to={ROUTES.HOME.linkTo()} />;
    }
    return <h1>LOADING</h1>;
  }
}

const mapStateToProps = state => ({
  token: getToken(state)
});

const mapDispatchToProps = dispatch => ({
  handleAuth() {
    dispatch(setSession());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Callback);
