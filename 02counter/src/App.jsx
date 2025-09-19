import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [Counter,setCounter] = useState(15)

  const addvalue = () => {
    setCounter(Counter + 1 )
  }

  const removedValue =() => {
      setCounter(Counter - 1 )
  }
  

  return (
    <>
      <h1>Counter Program</h1>
      <h2>Counter value: {Counter} </h2>
      <button onClick = {addvalue}>Add Value {Counter}</button>
      <br />
      <button onClick= {removedValue} >Remove value {Counter} </button>
    </>
  )
}


export default App
