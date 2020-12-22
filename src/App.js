import React from 'react';
import { ApolloProvider } from 'react-apollo';
import Myprofile from './components/Myprofile';
import Client from './client';
import Login from './components/Login';

const App = () => {
  return (
    <ApolloProvider client={Client}>
      <div className="App">
        <h1>GitHub API</h1>
        <Myprofile />
        <Login />
      </div>
    </ApolloProvider>
  );
};

export default App;
