// eslint-disable-next-line react/prop-types
export function UncontrolledLogin({ onLogin }) {
  //gestione login utilizzando API DOM
  const handleFormSubmit = (event) => {
    event.preventDefault();

    const formElements = event.target.elements;
    const username = formElements.username.value;
    const password = formElements.password.value;
    const remember = formElements.remember.checked

    onLogin({ username, password, remember });
  };

  //gestione login utilizzando i FormData
  const loginWithFormData = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target.form);

    const username = formData.get("username")
    const password = formData.get("password")
    const remember = formData.get("remember") === "on" ? true : false
   
    onLogin({ username, password, remember });
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <h1>My Uncontrolled Form</h1>
      <input name="username" />
      <input name="password" type="password" />
      <input name="remember" type="checkbox" />
      <button type="submit">Login</button>
      <button onClick={loginWithFormData}>Login with FormData</button>
    </form>
  );
}
