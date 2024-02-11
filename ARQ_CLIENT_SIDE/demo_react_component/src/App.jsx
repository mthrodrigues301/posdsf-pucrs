import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HelloWorld } from './components/HelloWorld';
import { HelloWorldColorful } from './components/HelloWorldColorful';
import { MyButton } from './components/MyButton';

function App() {
  return (
    <>
      <HelloWorld />
      <HelloWorldColorful name="Matheus Rodrigues" color="red" />
    </>
  );
}

export default App
