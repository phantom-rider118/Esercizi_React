import { useState } from "react";
import "./App.css";
import { LanguageContext } from "./components/LanguageContext";
import { HelloWorld } from "./components/HelloWorld";

function App() {
  const [language, setLanguage] = useState("en");

  const handleSetLanguage = (event)=>{
    setLanguage(event.target.value)
  }
  return (
    <>
      <div>
        <label htmlFor="select-language">Select Language: </label>
        <select
          id="select-language"
          value={language}
          onChange={handleSetLanguage}
        >
          <option value="en">English</option>
          <option value="it">Italiano</option>
        </select>
        <LanguageContext.Provider value={language}>
          <HelloWorld />
        </LanguageContext.Provider>
      </div>
    </>
  );
}

export default App;
