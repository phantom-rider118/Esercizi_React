export function Dashboard() {
  const user = localStorage.getItem("userExist");
  const userParse = JSON.parse(user); //passare la costante

  const handleLogout = ()=>{
    localStorage.setItem("isLogged", "")
    localStorage.removeItem("userExist")
  }
  
  
  return (
    <>
      <h2>
        Ciao, {userParse.nome} {userParse.cognome}
      </h2>
      <div>
        <div>
          <span>Nome:</span>
          <span style={{ color: "red" }}>{userParse.nome}</span>
        </div>
        <div>
          <span>Cognome:</span>
          <span style={{ color: "red" }}>{userParse.cognome}</span>
        </div>
        <div>
          <span>Email:</span>
          <span style={{ color: "red" }}>{userParse.email}</span>
        </div>
        <div></div>
      </div>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
}
