import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <div className="header-container">
      <div className="container">
        <div className="Row">
         
          <div className="Col-md-10">
            <div className="head-container ">
              <ul className="d-flex align-items-start justify-content-start">
                <Link to="/home" className="items">
                  <li>Home</li>
                </Link>
                <Link to="/courses" className="items">
                  <li>Courses</li>
                </Link>
                <Link to="/about" className="items">
                  <li>About us</li>
                </Link>
                <Link to="contact" className="items">
                  <li>Contact us</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
     
       
      
      
     
     
    );
};

export default Header;