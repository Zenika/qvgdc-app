import 'index.css';

import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import App from 'components/App/App';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';

const httpLink = createHttpLink({
  uri: 'https://app-fe420896-d2b9-4a0d-9118-382331b89a58.cleverapps.io/',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

require('assets/scss/styles.scss');

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
