import React, { Component } from 'react';
import '../styles/component/header.scss';
import logo from '../logo.svg';

export class Header extends Component {

  render() {
    return (
           <div className="App">
            <header className="App-header">
              <h3>Sample FlipKart Game</h3>
              <a href="/home">
                 <img src={logo} className="App-logo" alt="logo"/>
              </a>
            </header>
          </div>
              )
  }
}

export default Header;