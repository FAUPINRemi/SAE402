import { useState } from 'react'
import React from 'react';
import ReactDOM from 'react-dom';
import { Canvas } from '@react-three/fiber';
import './App.css'
import Navbar from './Navbar.jsx';
    
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar></Navbar>
       <div className="App">

          <Canvas>
            {/* Our 3D components will go here */}
          </Canvas>
        </div>
    </>
  )
}

export default App
