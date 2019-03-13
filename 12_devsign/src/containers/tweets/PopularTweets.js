import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { fetchTweets } from '../../actions/tweets';
import Tweets from '../../components/tweets/Tweets';

class PopularTweets extends PureComponent {
  componentDidMount() {
    this.props.fetch();
  }

  render() {
    return <Tweets {...this.props} />;
  }
}

const mapStateToProps = state => ({
  tweets: state.tweets.tweets // use a selector though
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchTweets());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PopularTweets);
