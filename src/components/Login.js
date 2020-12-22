import React, { Component } from 'react';

export default class Login extends Component {
  btnClick = () => {
    console.log('btn clicked');
  };
  render() {
    return (
      <div>
        <button
          onClick={this.btnClick}
          type="button"
          className="btn btn-primary"
        >
          Log In
        </button>
      </div>
    );
  }
}
