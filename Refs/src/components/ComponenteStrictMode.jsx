import { useEffect, useRef } from "react";

export function ComponenteStrictMode() {
  const mountedRef = useRef(false);

  useEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current = true;
      console.log("Mounting for the first time");
    }
  }, []);

  return <div>controllo montaggio con StrictMode</div>;
}
