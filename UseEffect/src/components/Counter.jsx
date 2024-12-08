import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
export function Counter({ initialValue, incrementAmount }) {
  const [counter, setCounter] = useState(initialValue);
  
  //Effetto Collaterale
  useEffect(()=>{
    console.log(`the current value of the counter ${counter}`)
  },[counter])

  function handleCounterIncrement() {
    setCounter((c) => {
      return c + incrementAmount;
    });
  }

  return (
    <div>
      <h2>I have counted to {counter}</h2>
      <button onClick={handleCounterIncrement}>Increment</button>
    </div>
  );
}
