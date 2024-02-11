import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MyButton } from './components/MyButton'
import { MyButton2 } from './components/MyButton2'

function App() {
  const handleClick = (event) => {
    alert(`Clicked on ${event.currentTarget.id}`);
  }

  return (
    <div id='divApp' onClick={handleClick}>
      <MyButton />
      <MyButton2 />
    </div>
  )
}

export default App
