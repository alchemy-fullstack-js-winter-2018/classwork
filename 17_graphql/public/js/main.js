const query = `
mutation ($title: String!, $body: String!) {
	createNote(title: $title, body: $body) {
    _id
    title
    body
  }
}
`;

const variables = {
  title: 'GraphQl in fetch',
  body: 'We are fetching with graphql'
};

const graphqlFetch = (query, variables = {}) => {
  /* eslint no-undef: "off" */
  return fetch('/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query, variables })
  })
    .then(res => res.json());
};

graphqlFetch(query, variables)
  .then(console.log);
