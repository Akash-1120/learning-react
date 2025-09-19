


import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-purple-500 text-7xl rounded-xl'>
      Hello My name is akash</h1>
    <Card username='Akash' code='1120'/>
    <Card username='Bhumika'code= '1101'/>
    <Card username='Shivangi' code='1412'/>
    <Card username='Rohit' code = '2811'/>
    </>
      

    )
}

export default App
