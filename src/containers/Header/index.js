import React, { Component } from 'react';
import './index.css';

class Header extends Component {
  render() {
    return (
      <i className="hamburger-container" style={{display: 'block'}}>
        <svg className="svg-hamburguer" enable-background="new 0 0 32 32" height="32px" viewBox="0 0 32 32" width="32px" xmlns="http://www.w3.org/2000/svg">
          <g>
            <path d="M1,10h30c0.552,0,1-0.448,1-1c0-0.552-0.448-1-1-1H1C0.448,8,0,8.448,0,9C0,9.552,0.448,10,1,10z"></path>
            <path d="M31,15H1c-0.552,0-1,0.448-1,1c0,0.552,0.448,1,1,1h30c0.552,0,1-0.448,1-1C32,15.448,31.552,15,31,15z"></path>
            <path d="M31,22H11c-0.552,0-1,0.448-1,1s0.448,1,1,1h20c0.552,0,1-0.448,1-1S31.552,22,31,22z"></path>
            <g></g>
          </g>
        </svg>
      </i>
    );
  }
}

export default Header;
