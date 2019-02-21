import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { getCharacters } from '../../services/rickAndMortyApi';
import Character from './Character';

export default class Characters extends PureComponent {
  static propTypes = {
    page: PropTypes.number,
    updateTotalPages: PropTypes.func.isRequired
  };

  static defaultProps = {
    page: 1
  };

  state = {
    characters: []
  };

  fetchCharacters = () => {
    getCharacters(this.props.page)
      .then(response => {
        this.props.updateTotalPages(response.totalPages);
        this.setState({ characters: response.results });
      });
  };

  componentDidMount() {
    this.fetchCharacters();
  }

  componentDidUpdate(prevProps) {
    if(prevProps.page !== this.props.page) {
      this.fetchCharacters();
    }
  }

  render() {
    const characters = this.state.characters.map(character => {
      return (
        <Character key={character.name} character={character} />
      );
    });
    return (
      <table>
        <tbody>
          {characters}
        </tbody>
      </table>
    );
  }
}
