import { setContext } from 'apollo-link-context';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache, ApolloClient } from 'apollo-boost';

const httpLink = new HttpLink({ uri: 'https://api.github.com/graphql' });

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${process.env.REACT_APP_ACESS_TOKEN}`,
    },
  };
});

const link = authLink.concat(httpLink);

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
});

export default client;
