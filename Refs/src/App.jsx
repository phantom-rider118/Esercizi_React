import React from 'react';
import "./App.css";
import { ComponenteStrictMode } from "./components/ComponenteStrictMode";
import { FocusableInput } from "./components/FocusableInput";

function App() {
  return (
    <>
      <React.StrictMode>
        <div>
          <FocusableInput />
          <hr />
          <ComponenteStrictMode />
        </div>
      </React.StrictMode>
    </>
  );
}

export default App;
