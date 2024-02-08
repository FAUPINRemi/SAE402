import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/navbar.css'; // Assurez-vous d'avoir un fichier CSS avec les styles nécessaires
import icon from './img/icon_discorvem_white.png'; // Assurez-vous que le chemin est correct

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <nav>
        <div className='containernav'>
        <img className='logo_navbar' src={icon} alt="icon_discoverm" />
      <h1 className='title_navbar'>Discoverm .</h1>
        </div>
        <ul id="navbar-links" className={isOpen ? 'active' : ''}>
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/dogon-mali" onClick={() => setIsOpen(false)}>Les Dogons</Link></li>
          <li><Link to="/users" onClick={() => setIsOpen(false)}>Users</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;