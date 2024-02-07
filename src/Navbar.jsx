import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./App.css";

function Navbar() {
    return (
        <div className={`wrapper ${isDarkMode ? 'whitemode' : ''}`}>
          <header>
            <nav>
              <div className="menu-icon">
                <i className="fa fa-bars fa-2x"></i>
              </div>
              <div className="logo">
                <li>
                  <Link to="/">
                    
                      <img id="imglogo" src="./" alt="logo" />
        
                  </Link>
                </li>
              </div>
              <div className="menu">
                <ul>
                  <li>
                    <Link to="/portfolio">Portfolio</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </nav>
          </header>
        </div>
      );
    }
    
    export default Navbar;
    
