import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class Login extends Component {
  state = {
    redirect: null,
  };
  btnClick = () => {
    console.log('Login clicked');
    this.setState({ redirect: '/user' });
  };
  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <div
          className="card bg-light"
          style={{ width: '24rem', height: '14rem' }}
        >
          <div className="card-body">
            <h3
              className="card-title text-info"
              style={{
                textAlign: 'center',
              }}
            >
              Github OAuth
            </h3>
            <p className="card-text">
              Log in with Github to see the repositories and repo details .
            </p>
            <div style={{ textAlign: 'center' }}>
              <button className="btn btn-info" onClick={this.btnClick}>
                Log In with Github
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
