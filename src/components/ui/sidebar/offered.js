import React, { Component } from 'react';
import Routes from '../../../lib/routes';
import logo from './logo-nasc.png';
import './Sidebar.css';

class Offered extends Component {
  render() {
    return [<img className="nasc-logo" alt="NASC logo" src={logo} />];
  }
}

export default Offered;
