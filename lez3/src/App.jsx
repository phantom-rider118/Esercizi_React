import { useEffect, useState } from 'react'
import './App.css'
import { Dashboard } from './components/Dashboard'
import { Login } from './components/Login'
import { Registrazione } from './components/Registrazione'

function App() {
const [isLogged, setIsLogged] = useState(null)
const log = localStorage.getItem("isLogged")

useEffect(()=>{
  setIsLogged(log)
},[])



  return (
    <>
    <Registrazione />
    {isLogged === "true" ? <Dashboard /> : <Login />}
    <Login />
    </>
  )
}

export default App
