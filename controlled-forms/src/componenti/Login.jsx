import { useState } from "react";

// eslint-disable-next-line react/prop-types
export function Login({ onLogin }) {
  const [data, setData] = useState({
    username: "",
    password: "",
    session: "false",
  });

  function handleInputChange(event) {
    const [name, value, checked, type] = event.target;

    setData((prev) => {
      return {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  const handleLogin = (event) => {
    event.preventDefault();
    onLogin(data);
  };

  function handleResetForm() {
    setData({
      username: "",
      password: "",
      session: false,
    });
  }

  return (
    <form onSubmit={handleLogin}>
      <div>
        <h1>My Form</h1>
        <input
          name="username"
          value={data.username}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <input
          name="password"
          type="password"
          value={data.password}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <input
          name="session"
          type="checkbox"
          checked={data.session}
          onChange={handleInputChange}
        />
      </div>
      <button disabled={!data.username || !data.password}>Login</button>
      <button onClick={handleResetForm}>Reset</button>
    </form>
  );
}
