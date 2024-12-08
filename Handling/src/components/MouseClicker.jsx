export function MouseClicker() {
    function handleButtonClick(event) {
        console.log(`Button name: ${event.target.name}`)
    }
    function handleImageClick(event) {
        event.stopPropagation(); //interrompe la propagazione dell'evento
        console.log(`Image source: ${event.target.src}`)
    }
    
    return(
        <div>
            <button name="one" onClick={handleButtonClick}>Click Me!</button>
            <button name="two" onClick={handleButtonClick}>
                <img src="https://via.placeholder.com/50" alt="Esempio" onClick={handleImageClick} /> 
                Click Me!</button>
        </div>
    )
}
// Per evitare che il nome del bottone venga visualizzato sulla console quando clicchiamo sull'immagine, utilizziamo il metodo stopPropagation().
// Questo metodo ci permette di interrompere la propagazione dell'evento verso i genitori.
//Quindi quando cliccando sull'immagine si vedrà solo la src dell'immagine, mentre cliccando il bottone si vedrà solo il nome.