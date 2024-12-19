import { useState } from "react";
import { GithubUser } from "./GithubUser";

export function GithubUsers() {
  const [username, setUsername] = useState("");
  const [usernames, setUsernames] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && !usernames.includes(username)) {
      setUsernames((prevUsernames) => [...prevUsernames, username]);
      setUsername("");
    }
  };
  return (
    <div className="github-users">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="user"
          id="user"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <button type="submit">Search</button>
      </form>

      <div className="user-list">
        {usernames.map((user) => (
          <GithubUser key={user} username={user} />
        ))}
      </div>
    </div>
  );
}
