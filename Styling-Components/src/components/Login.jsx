import { useState } from "react";

export function Login() {
    const [password, setPassword] = useState("")

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const styleButton = {
        backgroundColor: password.length < 8 ? "red" : "green",
        color: "white",
        padding: "10px",
        border: "none",
        cursor: "pointer",
    }

    return(
        <div>
            <input type="password" name="password" id="password" value={password} onChange={handlePasswordChange} placeholder="Inserisci la password" />
            <button style={styleButton}>Login</button>
        </div>
    )
}