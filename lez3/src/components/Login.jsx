import { useState } from "react";

export function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [messaggio, setMessaggio] = useState("");
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
    const userExist = parseUsers.find(
      (x) => x.email === data.email && x.password === data.password
    );
    if (userExist) {
      setMessaggio("Login effettuato con successo");
      // eslint-disable-next-line no-unused-vars
      const isLogged = localStorage.setItem("isLogged", true)
      localStorage.setItem("userExist", JSON.stringify("userExist"))
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
        {messaggio && <p>{messaggio}</p>}
      </form>
    </div>
  );
}
