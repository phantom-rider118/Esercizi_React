/* eslint-disable react/prop-types */
import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";

//creare contesto
// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext();

export function UserProvider({ children }) {
  const [userLogged, setUserLogged] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("userLog");
    //se esiste allora cambia null con quel dato
    if (data) {
      setUserLogged(JSON.parse(data));
    }
  }, []);

  //accetta oggetto user ancora non stabilito
  const login = (user) => {
    localStorage.setItem("userLog", JSON.stringify(user));
    setUserLogged(user);
  };

  const logout = () => {
    localStorage.removeItem("userLog");
    setUserLogged(null);
  };

  return (
    <UserContext.Provider value={{ login, logout, userLogged }}>
      {children}
    </UserContext.Provider>
  );
}
