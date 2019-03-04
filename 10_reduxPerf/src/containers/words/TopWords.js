import { connect } from 'react-redux';
import Words from '../../components/words/Words';
import { getFirstWords } from '../../selectors/words';

const mapStateToProps = state => ({
  words: getFirstWords(state, 1000)
});

export default connect(
  mapStateToProps
)(Words);
