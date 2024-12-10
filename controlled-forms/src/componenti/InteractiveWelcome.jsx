import { useState } from "react";
import { Welcome } from "./Welcome";

export function InteractiveWelcome() {
  const [name, setName] = useState("");

  const handleChangeName = (event) => {
    const evento = event.target.value;
    setName(evento);
  };

  return (
    <div>
      <input type="text" value={name} onChange={handleChangeName} />
      <Welcome name={name} />
    </div>
  );
}
