import "./App.css";
import { Dashboard } from "./components/Dashboard";
import { Login } from "./components/Login";
import { Registrazione } from "./components/Registrazione";
import { UserProvider } from "./components/UserContext";

function App() {
  return (
    <UserProvider>
      <Registrazione />
      <Login />
      <Dashboard />
    </UserProvider>
  );
}

export default App;
