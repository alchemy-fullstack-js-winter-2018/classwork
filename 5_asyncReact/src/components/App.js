import React, { Component } from 'react';
import { Characters, CharactersWithPaging } from './characters/Characters';
import { withPaging } from './paging/Paging';

export default class App extends Component {
  render() {
    return (
      <>
        <DogsWithPaging />
        <Characters updateTotalPages={() => { }} />
        <CharactersWithPaging />
      </>
    );
  }
}

function Dogs({ page }) {
  return <h1>{page}</h1>;
}

const DogsWithPaging = withPaging(Dogs);
