import "./App.css";
import { Colori } from "./components/Colori";

function App() {
  const colors = [
      { id: 1, name: "blu" },
      { id: 2, name: "giallo" },
      { id: 3, name: "rosso" },
      { id: 4, name: "arancione" },
    ];
  return(
    <div>
      <Colori colors={colors}/>
    </div>
  )
}

export default App;
