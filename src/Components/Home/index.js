//Dependencies
import React from 'react';
//Internals
import Navbar from '../Navbar';
import './styles.css';

const Home = () =>  (
  <div className="">
    <Navbar />
    <div className="header z-depth-3">
      <h1>Home</h1>
    </div>
    <div className="home-wrapper">
      <div className="row">
        <div className="intro">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>
    </div>
  </div>
)

export default Home;
