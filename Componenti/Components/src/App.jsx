import Hello from "./Hello";

function App() {
    return (
        <div>
            <Hello />
            <Hello />  
        </div>
    );
}
export default App;

// Puoi usare il componente Hello più di una volta nel componente App? Cosa succede se lo fai?
//Si, il componente Hello si può utilizzare più di una volta, ad ogni componente scritto viene renderizzata separatamente.

//Puoi eseguire il rendering del componente Message direttamente all'interno del componente App? Cosa succede se lo fai? 
//Si, si può eseguire il rendering del messaggio direttamente all'interno del componente App, tuttavia se vogliamo che il nostro componente sia flessibile e riutilizzabile e meglio non scriverlo direttamente. 

