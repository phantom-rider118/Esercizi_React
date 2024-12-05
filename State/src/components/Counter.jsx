import { useState } from "react";
import { CounterDisplay } from "./CounterDisplay";

// eslint-disable-next-line react/prop-types
export function Counter({ initialValue, incrementAmount }) {
  const [counter, setCounter] = useState(initialValue);

  function handleCounterIncrement() {
    setCounter((c) => c + incrementAmount);
  }

  function handleCounterDecrement() {
    setCounter((c) => c - incrementAmount);
  }

  function handleCounterReset() {
    setCounter(initialValue);
  }

  return (
    <div>
      <CounterDisplay count={counter} />
      <button onClick={handleCounterIncrement}>Increment</button>
      <button onClick={handleCounterDecrement}>Decrement</button>
      <button onClick={handleCounterReset}>Reset</button>
    </div>
  );
}
