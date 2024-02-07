import { useState } from 'react'
import { Canvas } from '@react-three/fiber';
import './App.css'

    
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div className="App">
          <Canvas>
            {/* Our 3D components will go here */}
          </Canvas>
        </div>
    </>
  )
}

export default App
