import './App.css'
import { Dashboard } from './components/Dashboard'
import { Login } from './components/Login'
import { Registrazione } from './components/Registrazione'

function App() {
const isLogged = localStorage.getItem("isLogged")

  return (
    <>
    <Registrazione />
    {isLogged ? <Dashboard /> : <Login />}
    <Login />
    </>
  )
}

export default App
