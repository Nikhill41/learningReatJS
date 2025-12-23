import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'


  const names = [
  "Aarav",
  "Nikhil",
  "Priya",
  "Rohit",
  "Ananya",
  "Vikram",
  "Sneha",
  "Kunal"
];
const locations = [
  "Delhi",
  "Mumbai",
  "Bengaluru",
  "Chennai",
  "Kolkata",
  "Hyderabad",
  "Jaipur",
  "Pune"
];

const App=()=>{
  return(
    <div className='parent'>
      {names.map((name,index)=>(
        <Card key={index} name={name} location={locations[index]} />
      ))}
    </div>
  )
}


export default App
