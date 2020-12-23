import React, { Component } from 'react';

export default class Login extends Component {
  btnClick = () => {
    console.log('btn clicked');
  };
  render() {
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
              Github oAuth Flow
            </h3>
            <p className="card-text">
              Log in with Github to see the account details and repositories .
            </p>
            <div style={{ textAlign: 'center' }}>
              <button className="btn btn-info">Log In</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
