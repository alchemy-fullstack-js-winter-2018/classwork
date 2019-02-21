import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withPaging } from '../paging/Paging';
import { getLocations } from '../../services/__mocks__/rickAndMortyApi';
import Location from './Location';
import { withFetch } from '../fetch/Fetch';

export class Locations extends PureComponent {
  static propTypes = {
    results: PropTypes.array.isRequired,
  };

  render() {
    const locationRows = this.props.results.map(location => {
      return <Location key={location.id} location={location} />;
    });

    return (
      <table>
        <tbody>
          {locationRows}
        </tbody>
      </table>
    );
  }

}

const FetchLocation = withFetch(Locations)(getLocations);

export const LocationsWithPaging = withPaging(FetchLocation);
