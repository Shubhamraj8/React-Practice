import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useCallback } from 'react'

function App() {
  const[length, setlength] = useState(0)
  const[numAllowed, setNumAllowed] = useState(false)
  const[charAllowed, setCharAllowed] = useState(false)
  const[password, setPassword] = useState("")

  const passGen = useCallback(() => {
    let pass = ""
    let str = 
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllowed) str += "0123456789"
    if(charAllowed) str += "@#$%&!"
  }, [length, numAllowed, charAllowed, setPassword])
  return (
    <>
      <h1 className='text-4xl text-center text-white'>Passoword Generator</h1>
    </>
  )
}

export default App
