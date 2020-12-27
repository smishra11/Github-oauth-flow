import React, { Component } from 'react';
import Gitlogo from '../assets/git.svg';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div style={{ marginBottom: '3rem' }}>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand navGit" href="/smishra11">
            <img src={Gitlogo} width="30" height="30" alt="Nav Img" />
            <span style={{ fontWeight: 'bold', fontSize: '24px' }}>
              Git OAuth
            </span>
          </a>
          <button className="btn btn-outline-info mr-4">Log Out</button>
        </nav>
      </div>
    );
  }
}

export default Navbar;
