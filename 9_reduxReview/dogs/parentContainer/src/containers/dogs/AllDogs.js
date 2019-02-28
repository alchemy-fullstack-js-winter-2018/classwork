import { connect } from 'react-redux';
import Dogs from '../../components/dogs/Dogs';
import { getDogs } from '../../selectors/dogs';

const mapStateToProps = state => ({
  dogs: getDogs(state)
});

const AllDogsContainer = connect(
  mapStateToProps
)(Dogs);

export default AllDogsContainer;
