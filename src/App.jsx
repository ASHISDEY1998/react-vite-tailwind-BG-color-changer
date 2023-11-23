import { useState } from 'react'
import './App.css'
import Buttonbar from './Buttonbar'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>
      <Buttonbar changecolor={setColor}></Buttonbar>
    </div>
  )
}

export default App
