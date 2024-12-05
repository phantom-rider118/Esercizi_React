import "./App.css";
import { Counter } from "./components/Counter";

function App() {
  return (
    <>
      <div>
        <h1>Couter Application</h1>
        <Counter initialValue={0} incrementAmount={1}/>
      </div>
    </>
  );
}

export default App;
