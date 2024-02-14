// Accueil.jsx
import React from 'react';
import { Canvas } from '@react-three/fiber';
import "./accueil.css"
function Accueil() {
  return ( 
    
    <>
    <header className='titleacc'>Découvrez de nouvelles cultures</header>
    <p className='text-3xl font-bold underline'>test</p>
      <div className="App">
        <Canvas>
          {/* Our 3D components will go here */}
        </Canvas>
      </div>
  
  </>
  
  );
  
  
  
}

export default Accueil;