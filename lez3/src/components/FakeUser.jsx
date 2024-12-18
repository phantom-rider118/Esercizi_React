import { useEffect, useState } from "react";

export function FakeUser() {
  const [database, setDatabase] = useState([]); //database degli utenti
  const [error, setError] = useState(null); //stato per gli errori
  const [loading, setLoading] = useState(true); //utilizzato per il caricamento, le chiamate richiedono tempo

  useEffect(() => {
    const fetchFunction = async () => {
      try {
        setLoading(true); //potrebbe cambiare nel corso d'opera quindi impostiamo a true
        const response = await fetch(
          "https://fakerapi.it/api/v1/users?_quantity=18&_locale=it_IT&_seed=12456"
        );
        if (!response.ok) {
          throw new Error("Errore nel fetching dei dati");
        }
        //trasformiamo la risposta in json
        const data = await response.json();
        //salviamo i nostri dati all'interno del nostro stato setDatabase
        setDatabase(data.data); //la nostra costante.l'oggetto che contiene i nostri dati
      } catch (error) {
        setError(error.message); //.message è una chiave che contiene il log dell'errore con dei messaggi che vengono stampati nel momento in cui si verifica un determinato errore
      } finally {
        //a prescindere termina il caricamento
        setLoading(false);
      }
    };
    fetchFunction();
  }, []); //mettiamo un array vuoto perchè abbiamo bisogno che il fetch venga eseguito nuovamente alla modifica di qualcosa

  return (
    <div>
      {loading && <p>Caricamento dati in corso...</p>}
      {error && <p>{error}</p>}
      <ul>
        {database.map((x) => (
          <li key={x.id}>
            <span>{x.username}</span> <span>{x.email}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
