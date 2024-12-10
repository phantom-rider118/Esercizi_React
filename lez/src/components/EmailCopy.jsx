import { useRef, useState } from "react"

function EmailCopy(){
    const emailRef = useRef()
    const [errore, setErrore] = useState("")
    const [validazione, setValidazione] = useState("")
    
    const handleSubmit = (event) =>{
        event.preventDefault()
        const email = emailRef.current.value

        if(!email.includes("@") || !email.includes(".")){
            setErrore("Formato non valido")
            setValidazione("")
        } else {
            setErrore("")
            setValidazione(email)
        }
    }

    //verificare se esiste, per evitare la creazione di stringhe vuote
    // useEffect(()=>{
    //     if(validazione){
    //         if(!validazione.includes("@") || !validazione.includes(".")){
    //             setErrore("Formato email non valido")
    //         } else {
    //             setErrore("")
    //         }
    //     }
    // },[validazione])
    
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" name="" value={email} onChange={(event)=>setEmail(event.target.value)} />
            <button type="submit">Invia</button>
            {errore ? (<p>{errore}</p>) : (validazione && <p>{email}</p>)}
        </form>
    )
}

export default EmailCopy