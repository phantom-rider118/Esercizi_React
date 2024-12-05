import { useState } from "react";

export default function Somma() {
  const [num1, setnum1] = useState(0);
  const [num2, setnum2] = useState(0);

  const changeNumberOne = (event) => {
    setnum1(Number(event.target.value));
    console.log(event.target.value)
  };
  const changeNumberTwo = (event) => {
    setnum2(Number(event.target.value));
    console.log(event.target.value)
  };
  console.log("Stato aggiornato: ", num1);
  console.log("Stato aggiornato: ", num2);
  
  return (
    <div>
      <label>
        <input id="1" type="number" value={num1} onChange={changeNumberOne}></input>
      </label>
      <label>
        <input id="2" type="number" value={num2} onChange={changeNumberTwo}></input>
      </label>

      <h2>Somma: {num1 + num2}</h2>
    </div>
  );
}

