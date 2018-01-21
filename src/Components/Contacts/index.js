//Dependencies
import React from 'react';
//Internals
import Navbar from '../Navbar';
import './styles.css';

const Contacts = () => (
  <div className="">
    <Navbar />
    <div className="header">
      <h1>Contact Info</h1>
    </div>
    <div className="contact-wrapper">
      <div className="row">
        <div className="logo">
          <a href="http://www.facebook.com">
            <img src="https://facebookbrand.com/wp-content/themes/fb-branding/prj-fb-branding/assets/images/fb-art.png" alt="Facebook" />
          </a>
          <a href="http://www.github.com">
            <img src="https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png" alt="github" />
          </a>
          <a href="mailto:example@gmail.com">
            <img src="https://uniquelyyoursministries.files.wordpress.com/2015/03/email-logo.png?w=256" alt="email" />
          </a>
        </div>
      </div>
    </div>
  </div>
)

export default Contacts;
