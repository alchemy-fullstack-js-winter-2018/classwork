import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import qs from 'querystring';
import SearchForm from '../../components/words/SearchForm';
import { getSearchTerm } from '../../selectors/words';
import { updateSearchTerm } from '../../actions/words';

class SearchWords extends PureComponent {
  static propTypes = {
    term: PropTypes.string.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    updateSearchTerm: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { term } = qs.parse(this.props.location.search.slice(1));
    this.props.updateSearchTerm(term);
  }

  componentDidUpdate(prevProps) {
    if(prevProps.term !== this.props.term) {
      const { pathname } = this.props.location;
      const search = qs.stringify({ term: this.props.term });
      this.props.history.push(`${pathname}?${search}`);
    }
  }

  render() {
    return <SearchForm {...this.props} />;
  }
}

const mapStateToProps = state => ({
  term: getSearchTerm(state)
});

const mapDispatchToProps = dispatch => ({
  onChange({ target }) {
    dispatch(updateSearchTerm(target.value));
  },
  updateSearchTerm(term) {
    dispatch(updateSearchTerm(term));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SearchWords));
