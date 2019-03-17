import React from 'react';
import { connect } from 'react-redux';
import { setToken } from '../../actions/auth';

class Callback extends React.PureComponent {
  componentDidMount() {
    this.props.handleAuth()
      .then(() => {
        this.props.history.replace('/');
      });
  }
  render() {
    return <h1>CALLBACK</h1>;
  }
}

export default connect(
  null,
  dispatch => ({
    handleAuth() {
      const action = setToken();
      dispatch(action);
      return action.payload;
    }
  })
)(Callback);
