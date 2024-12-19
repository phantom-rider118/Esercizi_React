import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
export function GithubUser({ username }) {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFunction = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}`
        );

        if (!response.ok) {
          throw new Error("Errore nel fetching dei dati");
        }

        const data = await response.json();
        setUserData(data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchFunction();
  }, [username]);

  if (error) {
    return <p>Error: {error}</p>;
  }
  if (!userData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="github-user">
      <img src={userData.avatar_url} alt={userData.login} width={100} />
      <h2>{userData.name}</h2>
      <p>{userData.login}</p>
    </div>
  );
}
