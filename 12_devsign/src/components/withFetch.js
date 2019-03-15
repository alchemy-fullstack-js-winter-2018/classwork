import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export const withFetch = Component => {
  class WithFetch extends PureComponent {
    static propTypes = {
      loading: PropTypes.bool,
      fetch: PropTypes.func.isRequired,
      error: PropTypes.object
    };

    static defaultProps = {
      loading: false
    }

    componentDidMount() {
      this.props.fetch();
    }

    render() {
      if(this.props.loading) return <h1>LOADING</h1>;
      return (
        <>
          {this.props.error && <h1>ERROR</h1>}
          <Component {...this.props} />;
        </>
      );
    }
  }

  return WithFetch;
};
