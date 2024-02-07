// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import Navbar from './Navbar.jsx';
import Dogon from './page/Dogon-Mali.jsx';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar /> {/* Assurez-vous d'ajouter la Navbar ici */}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/dogon-mali" element={<Dogon />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
