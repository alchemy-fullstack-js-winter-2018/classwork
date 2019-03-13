import { connect } from 'react-redux';
import { fetchTweets } from '../../actions/tweets';
import { withFetch } from '../../components/withFetch';
import Tweets from '../../components/tweets/Tweets';
import { getTweets, isTweetsLoading } from '../../selectors/tweets';

const mapStateToProps = state => ({
  tweets: getTweets(state),
  loading: isTweetsLoading(state)
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
