import React from 'react';
import { useQuery } from 'react-apollo';
import gql from 'graphql-tag';

const GET_REPO_DETAIL = gql`
  query Repo($name: String!) {
    viewer {
      repository(name: $name) {
        name
        createdAt
        url
        description
        collaborators(first: 10) {
          edges {
            node {
              name
              login
            }
          }
        }
      }
    }
  }
`;
const ProjectDetails = ({ repoName, userName, avatar }) => {
  const { loading, error, data } = useQuery(GET_REPO_DETAIL, {
    variables: { name: repoName },
  });
  if (loading) return 'Loading';
  if (error) return console.log(error);
  const { repository } = data.viewer;
  return (
    <div className="container">
      <div className="card">
        <div
          className="card-header text-info"
          style={{
            fontSize: '20px',
            fontWeight: 'bold',
            backgroundColor: 'white',
          }}
        >
          <img
            src={avatar}
            alt="avatar"
            style={{ height: '25px', width: '25px' }}
          />{' '}
          {userName} / {repository.name}
        </div>
        <div className="card-body">
          <p className="card-text font_14">
            <b>Name: </b> {repository.name}
          </p>
          <p className="card-text font_14">
            <b>Description:</b> {repository.description}
          </p>
          <p className="card-text font_14">
            <b>Created Date:</b> {repository.createdAt}
          </p>
          <p className="card-text font_14">
            <b>Github URL:</b>
            <a href={repository.url} target="_blank" rel="noreferrer">
              {repository.url}
            </a>
          </p>
          <p className="card-text font_14">
            <b>Issue page:</b>
            <a
              href={repository.url + '/issues'}
              target="_blank"
              rel="noreferrer"
            >
              {repository.url + '/issues'}
            </a>
          </p>
          <p className="card-text font_14">
            <b>Collaborators: </b>{' '}
            {repository.collaborators.edges.map((colab, i) => {
              return (
                <span key={i}>
                  {colab.node.name} ({colab.node.login}){' '}
                  {i < repository.collaborators.edges.length - 1
                    ? ',\u00A0'
                    : ''}
                </span>
              );
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
