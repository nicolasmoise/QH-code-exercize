/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React from 'react';
import styles from './Header.css';
import withStyles from '../../decorators/withStyles';
import Link from '../../utils/Link';

@withStyles(styles)
class Header {

  render() {
    return (
      <div className="Header">
        <div className="Header-container">
          <a className="Header-brand" href="/" onClick={Link.handleClick}>
            <img className="Header-brandImg" src={require('./logo-small.png')} width="38" height="38" alt="React" />
            <span className="Header-brandTxt">Quartet Health</span>
          </a>
          <div className="Header-banner">
            <h1 className="Header-bannerTitle">Coding Exercise</h1>
            <p className="Header-bannerDesc">Nicolas Moise</p>
          </div>
        </div>
      </div>
    );
  }

}

export default Header;
