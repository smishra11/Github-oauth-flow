import React, { Component } from 'react';
import Gitlogo from '../assets/git.svg';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div style={{ marginBottom: '3rem' }}>
        <nav className="navbar navbar-light bg-light">
          <Link className="navbar-brand navGit" to="/smishra11">
            <img src={Gitlogo} width="30" height="30" alt="Nav Img" />
            <span style={{ fontWeight: 'bold', fontSize: '24px' }}>
              Git OAuth
            </span>
          </Link>
          <button className="btn btn-outline-info mr-4">Log Out</button>
        </nav>
      </div>
    );
  }
}

export default Navbar;
