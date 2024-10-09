import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [heading, setHeading] = useState("Magnificent Monkeys");

  const handleClick = ()=> {
       setHeading("Radical Rhinos");
  }

  return (
    <>
      <button onClick={handleClick}>
        Click me
      </button>
      <h1>{heading}</h1>
    </>
  )
}

export default App
