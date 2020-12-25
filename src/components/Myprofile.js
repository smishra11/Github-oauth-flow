import React, { Component } from 'react';
import Location from '../assets/location.svg';
import RepoIcon from '../assets/repo.svg';
import ProjectDetails from '../components/ProjectDetails';

class Myprofile extends Component {
  state = {
    isProjectClicked: false,
    clickedRepoName: '',
  };
  componentDidMount() {
    console.log(this.props.data);
  }

  projectClicked = (repo) => {
    console.log(repo);
    this.setState({ isProjectClicked: true, clickedRepoName: repo });
  };

  render() {
    const { viewer } = this.props.data;
    return !this.state.isProjectClicked ? (
      <div className="row">
        <div className="col-4">
          <img className="profileAvatar" src={viewer.avatarUrl} alt="Avatar" />
          <div className="avatarText">
            <h3>{viewer.name}</h3>
            <h5 className="text-secondary">{viewer.login}</h5>
            <div
              style={{ borderTop: '1px solid lightgrey', width: '250px' }}
            ></div>
            <p className="text-secondary mt-2" style={{ display: 'flex' }}>
              <img className="mr-1" src={Location} alt="location" />
              {viewer.location}
            </p>
          </div>
        </div>
        <div className="col-8">
          <div className="row">
            {viewer.repositories.edges.map((repo) => {
              return (
                <div
                  className="col-6"
                  key={repo.node.id}
                  onClick={() => this.projectClicked(repo.node.name)}
                >
                  <div
                    className="card bg-light mb-3"
                    style={{ maxWidth: '25rem' }}
                  >
                    <div className="card-body">
                      <h6
                        style={{ fontWeight: 'bold', color: 'rgb(3 102 214)' }}
                        className="card-title d-flex"
                      >
                        <img className="mr-2" src={RepoIcon} alt="repo" />{' '}
                        {repo.node.name}
                      </h6>
                      <hr />
                      <p className="card-text mb-2">
                        Created Date - {repo.node.createdAt}
                      </p>
                      <p className="card-text">
                        Github Link -
                        <a
                          href={repo.node.url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {repo.node.url}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    ) : (
      <ProjectDetails
        userName={viewer.login}
        avatar={viewer.avatarUrl}
        repoName={this.state.clickedRepoName}
      />
    );
  }
}

export default Myprofile;
