import { useState } from "react";

export function Registrazione() {
  const [data, setData] = useState({
    nome: "",
    cognome: "",
    email: "",
    password: "",
  });
  const [errore, setErrore] = useState("");
  const [errorEmail, setErrorEmail] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    //controllo password
    if (name === "password") {
      if (
        value.length < 6 ||
        !/\d/.test(value) ||
        !/[!@#$%^&*()]/.test(value)
      ) {
        setErrore(
          "La password deve contenere almeno 6 caratteri, di cui almeno un carattere speciale(!@#$%^&*())"
        );
      } else {
        setErrore("");
      }
    }

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //se trova un errore esce dalla funzione submit
    if (errore) return;

    const existData = localStorage.getItem("users");
    let utentiRegistrati = [];

    //verifica se esiste l'array vuoto
    if (existData) {
      utentiRegistrati = JSON.parse(existData);
    }

    //verifica se l'email esiste o no
    const existEmail = utentiRegistrati.some((x) => x.email === data.email);

    //se l'email esiste genera un errore
    if (existEmail) {
      setErrorEmail("Email già registrata");
      return;
    }
    utentiRegistrati.push(data);
    localStorage.setItem("users", JSON.stringify(utentiRegistrati));
    setData({
      nome: "",
      cognome: "",
      email: "",
      password: "",
    });
  };

  return (
    <>
      <div className="box">
        <form className="registrazione" onSubmit={handleSubmit}>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            name="nome"
            id="nome"
            onChange={handleChange}
            value={data.nome}
          />

          <label htmlFor="cognome">Cognome:</label>
          <input
            type="text"
            name="cognome"
            id="cognome"
            onChange={handleChange}
            value={data.cognome}
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            value={data.email}
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            value={data.password}
          />

          {errore && <p style={{ color: "red" }}>{errore}</p>}
          <button type="submit" disabled={!!errore}>
            Registrati
          </button>
          {errorEmail && <p style={{ color: "red" }}>{errorEmail}</p>}
        </form>
      </div>
    </>
  );
}
