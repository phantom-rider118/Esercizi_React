import { useRef } from "react";

export function Timer2() {
  const timerRef = useRef(null);
  const idRef = useRef(null);
  const secondRef = useRef(0);

  const handleStart = () => {
    if(idRef.current === null){
        idRef.current = setInterval(() => {
            secondRef.current += 1
            if(timerRef.current){
                timerRef.current.textContent = `Timer : ${secondRef.current}`
            }
        }, 1000);
    }
  };
  const handleReset = () => {
    if(idRef.current !== null){
        clearInterval(idRef.current)
        idRef.current = null
        secondRef.current = 0
        if(timerRef.current){
            timerRef.current.textContent = `Timer : ${secondRef.current}`
        }
    }
  };
  return (
    <div>
      <h1 ref={timerRef}>Timer: 0 </h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
