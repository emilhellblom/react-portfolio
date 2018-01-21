//Dependencies
import React from 'react';
//Internals
import Navbar from '../Navbar';
import './styles.css';

const About = () => (
  <div className="about-wrapper">
    <Navbar />
    <div className="header z-depth-3">
      <h1>About</h1>
    </div>
    <div className="upper">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <img src="https://static.pexels.com/photos/428339/pexels-photo-428339.jpeg" alt="Pexels"/>
    </div>
    <div className="middle-img">
    </div>
  </div>
)

export default About;
