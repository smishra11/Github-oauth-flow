import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  // Redirect,
  Switch,
} from 'react-router-dom';

import { ApolloProvider } from 'react-apollo';
import ProfileData from './components/ProfileData';
import Client from './client';
import Login from './components/Login';
import Navbar from './components/Navbar';
import ProjectDetails from './components/ProjectDetails';

const App = () => {
  return (
    <ApolloProvider client={Client}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Login />
            {/* <Redirect to="/login" /> */}
          </Route>
          <Route path="/:username" exact>
            <Navbar />
            <ProfileData />
          </Route>
          <Route path="/:username/:repo" exact>
            <Navbar />
            <ProjectDetails />
          </Route>
        </Switch>
      </Router>
    </ApolloProvider>
  );
};

export default App;
