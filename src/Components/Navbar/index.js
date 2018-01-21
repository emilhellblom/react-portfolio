//Dependencies
import React from 'react';
import { Link } from 'react-router-dom';
//Internals
import './styles.css';

const Navbar = () => (
  <div className="nav">
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/portfolio">Portfolio</Link></li>
      <li><Link to="/contacts">Contacts</Link></li>
      <li><Link to="/references">References</Link></li>
    </ul>
  </div>
)

export default Navbar;
