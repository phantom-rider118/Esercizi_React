import "./App.css";
import { CounterDisplay } from "./components/CounterDisplay";
import { Login } from "./components/Login";
import { Welcome } from "./components/Welcome";

function App() {
  return <>
  <Welcome />
  <hr />
  <CounterDisplay />
  <hr />
  <Login />
  </>;
}

export default App;
