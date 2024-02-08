// App.jsx
import { useState } from 'react';
import React, { useEffect } from 'react';
import './App.css';
import Navbar from './Navbar.jsx';
import Dogon from './page/Dogon-Mali.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from './page/accueil.jsx';

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const cursor = document.getElementById('cursor');

    document.addEventListener('mousemove', e => {
      cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;");
    });

    document.addEventListener('mouseover', e => {
      if (e.target.tagName === 'A') {
        cursor.classList.add('hide');
      }
    });

    document.addEventListener('mouseout', e => {
      if (e.target.tagName === 'A') {
        cursor.classList.remove('hide');
      }
    });
  }, []);


  
  return (
    <> <div id="cursor"></div>

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/dogon-mali" element={<Dogon />} />
        </Routes>
      </Router>
      
    </>
  );
}

export default App;