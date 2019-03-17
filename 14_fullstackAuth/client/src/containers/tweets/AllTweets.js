import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getTweets } from '../../selectors/tweets';
import { fetchTweets } from '../../actions/tweets';
import Tweets from '../../components/tweets/Tweets';

const withFetch = Component => {
  class WithFetch extends PureComponent {
    componentDidMount() {
      this.props.fetch();
    }
    render() {
      return <Component {...this.props} />;
    }
  }

  return WithFetch;
};

const mapStateToProps = state => ({
  tweets: getTweets(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchTweets());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withFetch(Tweets));
