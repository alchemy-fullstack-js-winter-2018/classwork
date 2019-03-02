import { connect } from 'react-redux';
import HeaderForm from '../../components/header/HeaderForm';
import { getTitle, getSubtitle } from '../../selectors/header';
import { updateTitle, updateSubtitle } from '../../actions/header';

const factoryMethod = {
  title: updateTitle,
  subtitle: updateSubtitle
};

const mapStateToProps = state => ({
  title: getTitle(state),
  subtitle: getSubtitle(state)
});

const mapDispatchToProps = dispatch => ({
  onChange({ target }) {
    dispatch(factoryMethod[target.name](target.value));

    // target.name is title or subtitle
    // const updateFn = factoryMethod[target.name];
    // const action = updateFn(target.value);
    // dispatch(action);

    // if(target.name === 'title') {
    //   dispatch(updateTitle(target.value));
    // }

    // if(target.name === 'subtitle') {
    //   dispatch(updateSubtitle(target.value));
    // }
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderForm);
