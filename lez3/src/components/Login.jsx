import { useContext, useState } from "react";
import { UserContext } from "./UserContext";

export function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [messaggio, setMessaggio] = useState("");
 //prende la funzione login utilizzando il contesto userContext
  const {login} = useContext(UserContext) 
  
  const handleChange = (event) => {
    const { name, value } = event.target;

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const userDatabase = localStorage.getItem("users");
    const parseUsers = JSON.parse(userDatabase);
    console.log(parseUsers);
    
    const userExist = parseUsers.find(
      (x) => x.email === data.email && x.password === data.password
    );
    console.log(userExist);
    
    if (userExist) {
      setMessaggio("Login effettuato con successo");
      //fa tutto nella funzione login che abbiamo richiamato
      login(userExist)
    } else {
      setMessaggio("Credenziali errate");
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" onChange={handleChange} />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleChange}
        />

        <button type="submit">Login</button>
        {messaggio && (<p style={{color: "red"}}>{messaggio}</p>)}
      </form>
    </div>
  );
}
