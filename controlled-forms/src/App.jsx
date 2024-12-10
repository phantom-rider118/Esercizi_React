import './App.css'
import { InteractiveWelcome } from './componenti/InteractiveWelcome';
import { Login } from './componenti/Login';

function App() {
  const handleLogin = (formState) => {
    console.log("Login State:", formState);
  };
  return (
    <>
      <div>
        <h1>Welcome to the App</h1>
        <InteractiveWelcome />
        <hr />
        <h2>Login</h2>
        <Login onLogin={handleLogin} />
      </div>
    </>
  )
}

export default App
