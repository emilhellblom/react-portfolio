//Dependencies
import React from 'react';
//Internals
import Navbar from '../Navbar';
import './styles.css';

const Portfolio = () => (
  <div className="">
    <Navbar />
    <h1>Portfolio page</h1>
    <div className="images">
      <img src="http://via.placeholder.com/300x150" alt="placeholder" />
      <img src="http://via.placeholder.com/300x150" alt="placeholder" />
      <img src="http://via.placeholder.com/300x150" alt="placeholder" />
      <img src="http://via.placeholder.com/300x150" alt="placeholder" />
    </div>
  </div>
)

export default Portfolio;
