import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/navbar.css';
import icon from './img/icon_discorvem_white.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className='navbar'>
      <input type="checkbox" id="active" checked={isOpen}></input>
      <label htmlFor="active" className="menu-btn" onClick={toggleMenu}><span></span></label>
      <label htmlFor="active" className="close"></label>
      <div className='containernav'>
        <img className='logo_navbar' src={icon} alt="icon_discoverm" />
        <h1 className='title_navbar'>Discoverm .</h1>
      </div>
      <div className="wrapper">
        <ul>
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <br></br>
          <li><Link to="/dogon-mali" onClick={toggleMenu}>Dogons</Link></li>
          <br></br>
          <li><Link to="/users" onClick={toggleMenu}>Users</Link></li>
        </ul>
      </div>
      </div>
    </div>
  );
}

export default Navbar;