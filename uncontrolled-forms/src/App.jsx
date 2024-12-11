import './App.css'
import { UncontrolledLogin } from './components/UncontrolledLogin'

function App() {
 const handleLogin = (FormData) =>{
  console.log("Dati del Login:", FormData)
 }

  return (
    <div>
      <UncontrolledLogin onLogin={handleLogin}/>
    </div>
  )
}

export default App
