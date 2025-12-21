import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
import Nav from './components/navBar'



function App() {

  return (
  <>
    <div className='Navbar'>
      <Nav />
    </div>
    <div className='Cardcontainer'>
      <Card />
      <Card />
    </div>
  </>
  )
}

export default App
