import { connect } from 'react-redux';
import Header from '../../components/header/Header';
import { getTitle, getSubtitle } from '../../selectors/header';

// map redux state to component props
const mapStateToProps = state => ({
  title: getTitle(state),
  subtitle: getSubtitle(state)
});

// const mapDispatchToProps = dispatch => ({

// });

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(Header);
