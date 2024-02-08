// Accueil.jsx
import React from 'react';
import { Canvas } from '@react-three/fiber';
function Accueil() {
  return ( 
    
    <>
    <h1>Bienvenu !</h1>
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