import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

export function HelloWorld() {
  //decidiamo quale lingua visualizzare
  const language = useContext(LanguageContext);

  //utilizzando il rendering consizionale
  return <h2>{language === "en" ? "Hello, World!" : "Ciao, Mondo!"}</h2>;
}
