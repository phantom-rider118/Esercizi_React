// eslint-disable-next-line react/prop-types
export function CounterDisplay({count}) {
  return <h2>The Counter: {count}</h2>;
}


//Quando si utilizza la funzione "setter" di useState, si dovrebbe usare:
//Nel caso abbiamo bisogno di un valore che dipenda dal valore precedente, allora utilizziamo la callback
// es. setCounter((c)=> c + incrementAmount). 
//Questo metodo ci permette di utilizzare lo stato più aggiornato anche in caso di chiamate multiple.
//Nel caso non dipendiamo da un valore precedente allora utilizziamo il valore immediato come nel caso di Reset
//Se siamo indecisi su quale metodo utillizzare, allora utilizziamo il metodo Callback che funziona in entrambi i casi.