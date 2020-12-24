import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import Myprofile from './Myprofile';

const GET_CURRENT_USER = gql`
  {
    viewer {
      login
      name
      avatarUrl
      location
      repositories(first: 6) {
        edges {
          node {
            name
            id
            createdAt
            name
            url
            description
          }
        }
      }
    }
  }
`;

const ProfileData = () => (
  <Query query={GET_CURRENT_USER}>
    {({ loading, error, data }) => {
      if (loading) return <h4>Loading</h4>;
      if (error) console.log(error);
      return (
        <div>
          <Myprofile data={data} />
        </div>
      );
    }}
  </Query>
);

export default ProfileData;
