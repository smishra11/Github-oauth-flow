import React from 'react';
import { useQuery } from 'react-apollo';
import gql from 'graphql-tag';
import Pencil from '../assets/pencil.svg';

import { withRouter } from 'react-router-dom';

const GET_REPO_DETAIL = gql`
  query Repo($name: String!) {
    viewer {
      avatarUrl
      login
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
const ProjectDetails = (prop) => {
  const repoName = prop.location.state;
  const { loading, error, data } = useQuery(GET_REPO_DETAIL, {
    variables: { name: repoName },
  });
  if (loading) return 'Loading';
  if (error) return console.log(error);
  const { login, avatarUrl, repository } = data.viewer;

  const editBtnClicked = (name) => {
    console.log(name);
  };

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
            src={avatarUrl}
            alt="avatar"
            style={{ height: '25px', width: '25px' }}
          />{' '}
          {login} / {repoName}
        </div>
        <div className="card-body">
          <p className="card-text font_14">
            <b>Name :</b>
            <button
              className="btn btn-sm pb-2"
              onClick={() => editBtnClicked('Name')}
              // style={{ outline: 'none' }}
            >
              <img src={Pencil} alt="pencil" />
            </button>
            <br />
            {repository.name}
          </p>
          <p className="card-text font_14">
            <b>Description:</b>
            <button
              className="btn btn-sm pb-2"
              onClick={() => editBtnClicked('Description')}
            >
              <img src={Pencil} alt="pencil" />
            </button>
            <br />
            {repository.description}
          </p>
          <p className="card-text font_14">
            <b>Created Date:</b>
            <br /> {repository.createdAt}
          </p>
          <p className="card-text font_14">
            <b>Github URL:</b>
            <br />
            <a href={repository.url} target="_blank" rel="noreferrer">
              {repository.url}
            </a>
          </p>
          <p className="card-text font_14">
            <b>Issue page:</b>
            <br />
            <a
              href={repository.url + '/issues'}
              target="_blank"
              rel="noreferrer"
            >
              {repository.url + '/issues'}
            </a>
          </p>
          <p className="card-text font_14">
            <b>Collaborators: </b>
            <br />
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

export default withRouter(ProjectDetails);
