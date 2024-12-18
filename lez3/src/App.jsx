import "./App.css";
import { Dashboard } from "./components/Dashboard";
import { FakeUser } from "./components/FakeUser";
import { Login } from "./components/Login";
import { Registrazione } from "./components/Registrazione";
import { UserProvider } from "./components/UserContext";

function App() {
  return (
    <UserProvider>
      <FakeUser/>
      <Registrazione />
      <Login />
      <Dashboard />
    </UserProvider>
  );
}

export default App;
