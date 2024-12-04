import "./App.css";
import AlertClock from "./components/AlertClock";

function App() {
  function handleAlertClock() {
    const oraCorrente = new Date().toLocaleTimeString();
    alert(`Ora Corrente: ${oraCorrente}`);
  }
  return (
    <>
      <AlertClock onClick={handleAlertClock} />
    </>
  );
}

export default App;
